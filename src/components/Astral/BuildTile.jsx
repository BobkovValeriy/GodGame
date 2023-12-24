import freeTile from "../../img/Astral/freeTileHex120.png"
import cantBuild from "../../img/Astral/Hex120CantBuild.png"
import BuyPlaceButton from "./BuyPlaceButton";
import { buildStructure } from "../../store/player/playerReducer";
import { useSelector} from "react-redux";

function BuildTile({ buildTileName,
    createBuildTile,
    changeInfo,
    focusedCard,
    astralConstructions,
    playerEnergy,
    changeFocusedCard,
    dispatch,
    canBuildImage}) {
    const buildTile = useSelector(state => state.playerReducer.playerBuildTiles[buildTileName])
    const isBuilding = buildTile.building
    const textLoc = useSelector((state) => state.langagueReducer)
    const buildingImg = isBuilding && astralConstructions[isBuilding] ? astralConstructions[isBuilding].image : null;

    function showDescr() {
        const structureName = astralConstructions[isBuilding].name
        const descrName = astralConstructions[isBuilding].descr
        let newDescr = textLoc[structureName] + ' - ' + textLoc[descrName]
        const buildingEffects = astralConstructions[isBuilding].playerModiffiers
        Object.entries(buildingEffects).forEach(([key, value]) => {
            newDescr += `\n${textLoc[key]}: ${value}.`;
        })
        changeInfo(newDescr);
    }
    function hideDescr() {
        changeInfo('')
    }
    function showFreeTileInfo() {
        changeInfo(textLoc["freeTileInfo"])
    }

    const neighbors = buildTile.neighborRays
    const x = buildTile?.coordinates?.x
    const y = buildTile?.coordinates?.y
    const buildPlaceStyle = {
        left: x + 'px',
        top: y + 'px',
    };
    if (!x || !y) {
        return null;
    }
    // Создаём конструкт
    function compareProperties(e, focusedCard) {
        if (!isBuilding) {
            e.preventDefault()
        }
    }
    function constructBuilding(focusedCard) {
        const cost = astralConstructions[focusedCard].cost
        dispatch(buildStructure({ buildTileName, focusedCard, cost }));
        changeFocusedCard('')
    }
    return (
        <div>
            <div className="build-place" style={buildPlaceStyle} onMouseLeave={hideDescr}>
                {isBuilding ? (
                    <img src={buildingImg} alt="tile" onMouseOver={showDescr} />
                ) : (focusedCard ? (astralConstructions[focusedCard].cost <= playerEnergy ? <img src={canBuildImage} alt="tile"
                    onDrop={(e) => constructBuilding(focusedCard)}
                    onDragOver={(e) => compareProperties(e, focusedCard)}
                />
                    : <img src={cantBuild} alt="tile" onMouseOver={showFreeTileInfo} />)
                    : <img src={freeTile} alt="tile" onMouseOver={showFreeTileInfo} />)}
            </div>
            {Object.values(neighbors).map((ray) => (
                !ray.active ? (
                    <BuyPlaceButton
                        key={ray.name}
                        ray={ray}
                        createBuildTile={createBuildTile}
                        parentTile={buildTile}
                        changeInfo={changeInfo}
                    />
                ) : null
            ))}
        </div>
    )
}
export default BuildTile;