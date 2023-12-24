import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeAstralVisible,
    changePlayerBuildTiles,
    changeAstralMidCoordinates,
    addPlayerBuildTiles,
    changeAstralCoordinatesCompiled,
    changePlayerBuildTileNeighborRay,
    changePlayerAstralTileMultiplier,
    energyRemove,
} from "../../store/player/playerReducer";
import { useTexts } from "../../locales/langagueSwitch";
import { RiArrowGoBackLine } from "react-icons/ri";
import ButtonWithInfo from "../Panels/infoButton/ButtonWithInfo";
import "./Astral.scss"
import BuildTile from "./BuildTile";
import { BuildTileGeneration } from "../../utils/buildTileGeneration";
import { cloneDeep } from 'lodash';
import tileCanBuildStart from "../../img/Astral/Hex120CanBuildStart.png"
import tileCanBuildEnd  from "../../img/Astral/Hex120CanBuildEnd.png"

function Astral() {
    const dispatch = useDispatch();
    const textLoc = useSelector((state) => state.langagueReducer)
    const playerBuildTiles = useSelector(state => state.playerReducer.playerBuildTiles);
    const astralVisible = useSelector(state => state.playerReducer.showAstral);

    const exitButtonStyle = {
        width: "50px",
        height: "50px"
    };

    function showAstral() {
        dispatch(changeAstralVisible());
    }
    //Вычисляем координаты тайлов.
    const targetRef = useRef(null);
    const astralMidCoordinates = useSelector(state => state.playerReducer.astralMidCoords);
    const astralCoordinatesCompiled = useSelector(state => state.playerReducer.astralCoordinatesCompiled)
    const handleResize = () => {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = Math.round(rect.width / 2 - 120);
        const centerY = Math.round(rect.height / 2);

        const newCoordinates = {
            x: centerX,
            y: centerY
        };
        dispatch(changeAstralMidCoordinates(newCoordinates));
    };
    function recompileCoordinates(buildTileName, diff) {
        const oldCoordinates = playerBuildTiles[buildTileName].coordinates;
        if (oldCoordinates) {
            const newCoordinates = {
                x: oldCoordinates.x + diff.x,
                y: oldCoordinates.y + diff.y,
            }
            if (playerBuildTiles[buildTileName]) {
                const updatedBuildTile = {
                    ...playerBuildTiles[buildTileName],
                    coordinates: {
                        x: newCoordinates.x,
                        y: newCoordinates.y,
                    },
                    neighborRays: {
                        ...playerBuildTiles[buildTileName].neighborRays,
                        nord: {
                            ...playerBuildTiles[buildTileName].neighborRays.nord,
                            finish: { x: newCoordinates.x, y: newCoordinates.y - 100 }, // Вверх
                        },
                        nordwest: {
                            ...playerBuildTiles[buildTileName].neighborRays.nordwest,
                            finish: { x: newCoordinates.x - 90, y: newCoordinates.y - 50 }, // Вверх-влево
                        },
                        nordeast: {
                            ...playerBuildTiles[buildTileName].neighborRays.nordeast,
                            finish: { x: newCoordinates.x + 90, y: newCoordinates.y - 50 }, // Вверх-вправо
                        },
                        south: {
                            ...playerBuildTiles[buildTileName].neighborRays.south,
                            finish: { x: newCoordinates.x, y: newCoordinates.y + 100 }, // Вниз
                        },
                        southwest: {
                            ...playerBuildTiles[buildTileName].neighborRays.southwest,
                            finish: { x: newCoordinates.x - 90, y: newCoordinates.y + 50 }, // Вниз-влево
                        },
                        southeast: {
                            ...playerBuildTiles[buildTileName].neighborRays.southeast,
                            finish: { x: newCoordinates.x + 90, y: newCoordinates.y + 50 }, // Вниз-вправо
                        },
                    },
                };

                dispatch(changePlayerBuildTiles({
                    ind: buildTileName,
                    ...updatedBuildTile
                }));
            }
        }
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        // Вычислили разницу, теперь вызываем recompileCoordinates с новыми значениями для каждого тайла
        if (astralVisible && !astralCoordinatesCompiled) {
            const diff = {
                x: astralMidCoordinates.x,
                y: astralMidCoordinates.y
            }
            Object.keys(playerBuildTiles).forEach((tileName) => {
                recompileCoordinates(tileName, diff);
            });
            dispatch(changeAstralCoordinatesCompiled())
        }
    }, [astralMidCoordinates])
    //Добавляем новый тайл
    const [newTileName, changeNewTileName] = useState('')
    const playerAstralTileLimits = useSelector(state => state.playerReducer.playerAstralTileLimits);
    const playerAstralTileCount = useSelector(state => state.playerReducer.playerAstralTileCount);
    const playerEnergy = useSelector(state => state.playerReducer.playerEnergy);
    const tileCost = useSelector(state => state.playerReducer.playerAstralTileCost);
    const [fieldWidth, setFieldWidth] = useState('100%');
    const [fieldHeight, setFieldHeight] = useState('100%');
    const opositeSide = {
        nord: "south",
        south: "nord",
        east: "west",
        west: "east",
        nordwest: "southeast",
        southeast: "nordwest",
        nordeast: "southwest",
        southwest: "nordeast",
    };
    function increaseFieldWidth(step){
        setFieldWidth(prevWidth => `calc(${prevWidth} + ${step}px)`);
    };
    function increaseFieldHeight(step){
        setFieldHeight(prevHeight => `calc(${prevHeight} + ${step}px)`);
    };
    function createBuildTile(tilename, x, y, parentTile, rayName) {
        if (tileCost <= playerEnergy) {
            dispatch(energyRemove(tileCost))
            dispatch(changeAstralCoordinatesCompiled())
            const newTile = new BuildTileGeneration(tilename, x, y, parentTile, rayName);
            dispatch(addPlayerBuildTiles(newTile));
            changeNewTileName(tilename);
        }
    }
    useEffect(() => {// Расширяем рабочую область астрала
        if (playerBuildTiles[newTileName]) {
            const { x, y } = playerBuildTiles[newTileName].coordinates;
            if (playerAstralTileCount > playerAstralTileLimits) {
                const result = playerAstralTileCount - playerAstralTileLimits
                changePlayerAstralTileMultiplier(result)
            }
            findNeighborsForTile(newTileName);
            if (x < 120) {
                const prevX = astralMidCoordinates.x;
                const prevY = astralMidCoordinates.y;
                const newX = prevX + 90;
                const newCoordinates = {
                    x: newX,
                    y: prevY
                };
                dispatch(changeAstralMidCoordinates(newCoordinates));
                increaseFieldWidth(90)
            }
            if (y < 120) {
                const prevX = astralMidCoordinates.x;
                const prevY = astralMidCoordinates.y;
                const newY = prevY + 90;
                const newCoordinates = {
                    x: prevX,
                    y: newY
                };
                dispatch(changeAstralMidCoordinates(newCoordinates));
                increaseFieldHeight(90)
            }
        }
    }, [newTileName]);

    function findNeighborsForTile(newTileName) {
        const tile = { ...playerBuildTiles[newTileName] }
        const neighborRays = tile.neighborRays;
        for (let rayName in neighborRays) {
            const { x } = neighborRays[rayName].finish;
            const { y } = neighborRays[rayName].finish;
            for (let findTile in playerBuildTiles) {
                if (findTile === tile.ind) {
                    continue;
                }
                if (playerBuildTiles[findTile].coordinates.x === x && playerBuildTiles[findTile].coordinates.y === y) {
                    const updatedTileNeighbor = {
                        tilename: tile.ind,
                        rayName: rayName,
                        neighbor: findTile,
                    };
                    dispatch(changePlayerBuildTileNeighborRay(updatedTileNeighbor));

                    const updatedParentTile = {
                        tilename: findTile,
                        rayName: opositeSide[rayName],
                        neighbor: tile.ind,
                    };
                    dispatch(changePlayerBuildTileNeighborRay(updatedParentTile));
                }
            }
        }
    }

    // Скролл  на мышку
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const scrollableMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setStartY(e.pageY - containerRef.current.offsetTop);
        setScrollLeft(containerRef.current.scrollLeft);
        setScrollTop(containerRef.current.scrollTop);
    };

    const scrollableMouseUp = () => {
        setIsDragging(false);
    };

    const scrollableMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const y = e.pageY - containerRef.current.offsetTop;
        const walkX = (x - startX) * 2; // Множитель скорости прокрутки
        const walkY = (y - startY) * 2; // Множитель скорости прокрутки по вертикали
        containerRef.current.scrollLeft = scrollLeft - walkX;
        containerRef.current.scrollTop = scrollTop - walkY;
    };
    // Создание структуры в тайле
    const [focusedCard, changeFocusedCard] = useState('');
    function buildCardDragStart(e, cardName) {
        changeFocusedCard(cardName)
    }
    function buildCardDragEnd(e) {
        changeFocusedCard('')
    }
    const [imageIndex, setImageIndex] = useState(0);//Анимация возможности строительства
    const images = [tileCanBuildStart, tileCanBuildEnd];

    useEffect(() => {
        const intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 200);
            return () => clearInterval(intervalId);
        }, []);
    const currentImage = images[imageIndex];
    //Конец создания структуры в тайле
    const playerBuildCards = useSelector(state => state.playerReducer.playerAstralBuildCards);
    const astralBuildings = useSelector(state => state.astralConstructsReducer.astralConstructions);
    const [info, changeInfo] = useState('')
    return (
        <div className="astral-wrapper">
            <div className="astral-field" ref={targetRef}>
                <div className="astral-entity-info">{info}</div>
                <div className="astral-construction-field-wrapper">
                    <div className="astral-construction-field-left-border"></div>
                    <div className="scallable-construction-field">
                    <div className="astral-construction-field"
                        ref={containerRef}
                        style={{ width: fieldWidth, height: fieldHeight}}
                        onMouseDown={scrollableMouseDown}
                        onMouseUp={scrollableMouseUp}
                        onMouseLeave={scrollableMouseUp}
                        onMouseMove={scrollableMouseMove}
                    >
                        {/* <button onClick={() => console.log(playerBuildTiles)}> buildTiles </button> */}
                        {Object.values(playerBuildTiles).map((buildTile) => (
                            <BuildTile
                                key={buildTile.ind}
                                id={buildTile.ind}
                                buildTileName={cloneDeep(buildTile.ind)}
                                createBuildTile={createBuildTile}
                                changeInfo={changeInfo}
                                focusedCard={focusedCard}
                                astralConstructions={astralBuildings}
                                playerEnergy={playerEnergy}
                                changeFocusedCard={changeFocusedCard}
                                dispatch={dispatch}
                                canBuildImage={currentImage}
                            />))}
                    </div>
                    </div>
                    <div className="astral-construction-field-right-border"></div>
                </div>
                <div className="astral-entity-bar">
                    {playerBuildCards.map((cardName, index) => {
                        const building = astralBuildings[cardName];
                        return (
                            <div className="build-card" key={index}
                                style={{ borderRadius: '6px', border: `2px solid ${building.color}` }}
                                draggable={true}
                                onDragStart={(e) => buildCardDragStart(e, cardName)}
                                onDragEnd={(e)=>buildCardDragEnd(e)}
                            >
                                <img src={building.image} alt="building-image" style={{ height: '40px', width: '40px' }} />
                                <div className="building-description">
                                    <div className="build-name">{textLoc[building.name]}</div>
                                    <div className="build-cost">{`${textLoc["astralConstructionCost"]} ${building.cost}`}</div>
                                    {Object.entries(building.playerModiffiers).map(([key, value]) => {
                                        return (
                                            <div className="build-modiffer">{`\n${textLoc[key]}: ${value}.`}</div>
                                        )
                                    })}
                                </div>
                            </div>)
                    })}
                    <ButtonWithInfo
                        buttonEvent={showAstral}
                        buttonImage={<RiArrowGoBackLine />}
                        tooltipText={useTexts('backToFizik')}
                        styleProp={exitButtonStyle}
                    />
                </div>
            </div>
        </div>
    )
}

export default Astral;