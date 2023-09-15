import React, { useEffect } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BsDownload, BsUpload } from "react-icons/bs";
import { MdNaturePeople } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeLifeCreationMenuVisible } from "../../store/lifeCreationReducer";
import './LifeCreation.scss'
import { useTexts } from "../../locales/langagueSwitch";
import ButtonWithInfo from "../Panels/infoButton/ButtonWithInfo";
import InfoUnitLifeCreation from "../InfoUnit/infoUnitLifeCreation";
import { useState } from "react";
import LifeCreationBar from "./LifeCreationBar";
import InfoUnit from "../InfoUnit/InfoUnit";
import { savePlayerCreatures } from "../../store/player/playerReducer";

function LifeCreationMenu() {
    const dispatch = useDispatch();
    const textLoc = useSelector((state) => state.langagueReducer)//локализация

    //Переменные и еффекты создания
    const [creature, changeCreature] = useState({
        nameOfCreature: '',
        bodyParts: [],
        size: 1,
        bodyType: ""
    })
    const [curentCreatureName, changeCreatureName] = useState('');

    const [canSaveCreature, changeCanSaveCreature] = useState(false);

    useEffect(() => {
        changeCreature((prevCreature) => ({
            ...prevCreature,
            nameOfCreature: curentCreatureName,
        }))
    }, [curentCreatureName])

    function updateCreationFunc(bodyPartData, newKeys) {
        changeLifeFormDetailsKeys(newKeys)
        const creatureAvaluableParts = Object.keys(bodyPartData.avaliableBodyParts);
        changeCreature({
            nameOfCreature: curentCreatureName,
            creatureCost: bodyPartData.bodyPartCost,
            creatureSpeed: 0,
            creatureStrength: bodyPartData.bodyPartStrength,
            reproductionSpeed: 0,
            bodyParts: [],
            bodyType: bodyPartData.name,
            size: bodyPartData.size,
            typeOfCreature: bodyPartData.typeOfCreature,
            visualImage: bodyPartData.visualImage,
            avaliableBodyPartSlots: creatureAvaluableParts,
            bodyPartAmount: bodyPartData.avaliableBodyParts,
        })
    }

    const updateCreatureBody = (bodyPartData) => {
        if (bodyPartData.size === 1 && bodyPartData.type === "body") {
            const newKeys = ["bodies", 'shells', 'foodIntakeSystem', 'reproductionSystem', "metabolicSystem"]
            updateCreationFunc(bodyPartData, newKeys)
        } else if (bodyPartData.size > 1 && bodyPartData.type === "body") {
            const newKeys = ["bodies", 'shells', 'foodIntakeSystem', 'reproductionSystem', "metabolicSystem", "locomotorSystem"]
            updateCreationFunc(bodyPartData, newKeys)
        }
    };
    //Переменные и еффекты создания

    //Переменные и еффекты частей тел создания
    const lifeFormDetails = useSelector(state => state.lifeFormDetailsReducer);//библиотека частей тел
    const [detailInformationTooltipText, setInformationTooltipText] = useState("");//описание части тела
    const [bodyPartData, setBodyPartData] = useState("");//часть тела
    const bodyPartColor = {// цвета частей груп частей тел
        shells: "blue",
        foodIntakeSystem: "red",
        digestiveSystem: "green",
        metabolicSystem: "yellow",
        reproductionSystem: "purple",
        locomotorSystem: "white",
    }
    const [currentBodyParts, changeCurrentBodyParts] = useState([]);//Массив частей тел
    const [lifeFormDetailsKeys, changeLifeFormDetailsKeys] = useState(["bodies"]);//Ключи для определения доступных груп частей тел
    const [systems, changeSystems] = useState(() => lifeFormDetailsKeys.map(key => ({
        title: textLoc[key],
        infoObject: lifeFormDetails[key]
    })));//Группы доступных частей тел
    useEffect(() => {
        const newSystems = lifeFormDetailsKeys.map(key => ({
            title: textLoc[key],
            infoObject: lifeFormDetails[key]
        }));

        changeSystems(newSystems);
    }, [lifeFormDetailsKeys])
    useEffect(() => {
        changeCreature((prevCreature) => ({
            ...prevCreature,
            bodyParts: currentBodyParts,
        }))
    }, [currentBodyParts])
    const handleMouseEnter = (text) => {
        setInformationTooltipText(text);
    };//Размещение справочной информации о части тела
    //Конец переменных и еффектов частей тел создания

    //Переменные и еффекты результирующие информацию о создании
    const [creatureSummaryInformation, changeCreatureSummaryInformation] = useState({})
    function updateCreatureSummaryInformation(value) {
        const initialValue = creature[value];
        const partsValueSum = creature.bodyParts.reduce((accumulator, currentValue) => {
            if (currentValue.hasOwnProperty(value)) {
                return accumulator + currentValue[value];
            }
            return accumulator;
        }, initialValue);
        changeCreatureSummaryInformation((prevInformation) => ({
            ...prevInformation,
            [value]: partsValueSum,
        }));
    }
    useEffect(() => {//Имя существа
        changeCreatureSummaryInformation((prevInformation) => ({
            ...prevInformation,
            nameOfCreature: creature.nameOfCreature,
        }))
    }, [creature.nameOfCreature])
    useEffect(() => {//Стоимость в зависимости от частей тел
        updateCreatureSummaryInformation('creatureCost');
    }, [creature.bodyParts, creature.creatureCost])
    useEffect(() => {//Скорость в зависимости от частей тел
        updateCreatureSummaryInformation('creatureSpeed');
    }, [creature.bodyParts, creature.creatureSpeed]);

    useEffect(() => {//Конкурентное преимущество в зависимости от частей тел
        updateCreatureSummaryInformation('creatureStrength');
    }, [creature.bodyParts, creature.creatureStrength]);
    useEffect(() => {//Скорость размножения в зависимости от частей тел
        updateCreatureSummaryInformation('reproductionSpeed');
    }, [creature.bodyParts, creature.reproductionSpeed]);
    useEffect(() => {//Метаболизм в зависимости от частей тел
        const creatureConsume = {};
        const creatureProduce = {};
        creature.bodyParts.forEach((part) => {
            if (part.hasOwnProperty("creatureConsume")) {
                Object.keys(part.creatureConsume).forEach((key) => {
                    if (!creatureConsume[key]) {
                        creatureConsume[key] = 0;
                    }
                    creatureConsume[key] += part.creatureConsume[key];
                });
            }
            if (part.hasOwnProperty("creatureProduce")) {
                Object.keys(part.creatureProduce).forEach((key) => {
                    if (!creatureProduce[key]) {
                        creatureProduce[key] = 0;
                    }
                    creatureProduce[key] += part.creatureProduce[key];
                });
            }
        });

        // Обновите состояние с извлеченными данными о потреблении и производстве
        changeCreatureSummaryInformation((prevInformation) => ({
            ...prevInformation,
            creatureConsume,
            creatureProduce,
        }));
    }, [creature.bodyParts]);

    //Конец переменных и еффектов результирующие информацию о создании

    //Переменные и эффекты управления созданием создания))
    const [message, setMessage] = useState("");//Сообщение о выполненном действии
    const [lastMessage, changeLastMessage] = useState("")//Информация о последнем действии
    const addCreature = useSelector(state => state.playerReducer.canAddCreature);//Доступность ячек зранения существ
    const playerCreatures = useSelector(state => state.playerReducer.playerCreatures);//Ячейки существ
    useEffect(() => {
        let timeoutId
        if (message) {
            changeLastMessage(message)
            timeoutId = setTimeout(() => {
                setMessage("");
            }, 4000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [message])//Очистка сообщения
    function changeName(e) {
        e.preventDefault();
        const inputValue = e.target.value.trim();
        let errorMessage = '';

        if (inputValue.length > 16) {
            errorMessage = textLoc["pleaseDontJokeItsToohardTospeak"];
        } else if (/[.*\(\[]/.test(inputValue) || /^[\-_]/.test(inputValue)) {
            errorMessage = textLoc["pleaseDontJokeItsToohardTospeakSymbols"];
        } else if (playerCreatures.some(creature => creature.nameOfCreature === inputValue)) {
            errorMessage = textLoc["nameMustBeUnique"];
        }

        if (errorMessage) {
            changeCanSaveCreature(false);
            setMessage(errorMessage);
        } else {
            changeCanSaveCreature(true);
            changeCreatureName(inputValue);
        }
    }//Изменение имени существа
    const saveCreature = () => {
        if (creature.nameOfCreature === '') {
            setMessage(textLoc["pleaseEnterCreatureName"]);
        } else if (!creature.bodyType) {
            const inputElement = document.getElementById("creatureName");
            inputElement.value = ""
            setMessage(textLoc["pleaseSelectCreatureBody"]);
        } else if (canSaveCreature) {
            if (addCreature) {
                dispatch(savePlayerCreatures(creature));
                setMessage(textLoc["lifeCreationSaved"]);
                document.getElementById("creatureName").form.reset();
                changeCreatureName('')
            } else {
                setMessage(textLoc["lifeCreationDontSave"]);
            }
            console.log("now")
            playerCreatures.map(creat => console.log(creat.nameOfCreature));
        } else {
            setMessage(lastMessage);
        }
    };//Сохранение существа в ячейку
    function exitLifeMenu() {
        changeCreature(prevCreature => { });
        dispatch(changeLifeCreationMenuVisible());
    };//Очистка и выход из редактора существ

    return (
        <div className="lifecreation-menu-wrapper">
            {message ? <div className="lifecreation-menu-message">{message} </div> : null}
            <div className="lifecreation-menu-field">
                <div className="life-creation-menu-structure-lifeform">
                    <div className="constructor-field">
                        <div className="constructor-details-menu">
                            <div className="constructor-details-menu-wrapper">
                                {systems.map((system, index) => (
                                    <InfoUnitLifeCreation key={index}
                                        title={`${system.title}`}
                                        infoObject={system.infoObject}
                                        onMouseEnterCallback={handleMouseEnter}
                                        selectedPropsCreatingElements={["name", "bodyPartCost", "bodyPartStrength", "bonuce"]}
                                        setBodyPartData={setBodyPartData}
                                        bodySize={creature.size}
                                        typeOfCreature={creature.typeOfCreature}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="constructor-view-wrapper">
                            <div className="constructor-detail-information">
                                {detailInformationTooltipText}
                            </div>
                            <div className="constructor-view"
                                onDrop={(e) => updateCreatureBody(bodyPartData)}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {creature.visualImage && (
                                    <div>
                                        <form onChange={(e) => changeName(e)} className="creature-form">
                                            <input type="text" id="creatureName" className="creature-name" />
                                        </form>
                                        <div>
                                            <img src={creature.visualImage} alt="Module" className="creature-image" />

                                        </div>
                                    </div>
                                )}
                            </div>
                            {creature.visualImage &&
                                <div className="body-parts-wrapper">
                                    {creature.avaliableBodyPartSlots.map((avaliablePart, index) => {
                                        const color = bodyPartColor[avaliablePart];
                                        const type = avaliablePart;
                                        const num = creature.bodyPartAmount[avaliablePart]
                                        return (
                                            <LifeCreationBar
                                                key={index}
                                                num={num}
                                                type={type}
                                                color={color}
                                                bodyPartData={bodyPartData}
                                                currentBodyParts={currentBodyParts}
                                                changeCurrentBodyParts={changeCurrentBodyParts}
                                            />)
                                    })
                                    }
                                </div>
                            }
                        </div>

                        <div className="constructor-details-menu">
                            <div className="constructor-details-menu-wrapper">
                                {creature.visualImage &&
                                    <InfoUnit
                                        title={textLoc[`lifeFormSummary`]}
                                        infoObject={creatureSummaryInformation}
                                    />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="life-creation-controlls">
                    <ButtonWithInfo
                        buttonEvent={exitLifeMenu}
                        buttonImage={<RiArrowGoBackLine />}
                        tooltipText={useTexts('backToFizik')}
                    />
                    <ButtonWithInfo
                        buttonImage={<BsDownload />}
                        tooltipText={useTexts('loadLifeForm')}
                    />
                    <ButtonWithInfo
                        buttonImage={<BsUpload />}
                        tooltipText={useTexts('saveLifeForm')}
                        buttonEvent={saveCreature}
                    />
                    <ButtonWithInfo
                        buttonImage={<MdNaturePeople />}
                        tooltipText={useTexts('settleLifeForm')}
                    />
                </div>
            </div>
        </div>
    )
}

export default LifeCreationMenu;
