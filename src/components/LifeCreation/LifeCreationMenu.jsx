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

function LifeCreationMenu() {
    const dispatch = useDispatch();
    const textLoc = useSelector((state) => state.langagueReducer)
    function exitLifeMenu() {
        changeCreature(prevCreature => { });
        dispatch(changeLifeCreationMenuVisible());
    };

    const [detailInformationTooltipText, setInformationTooltipText] = useState("");
    const [bodyPartData, setBodyPartData] = useState("");
    const bodyPartColor = {
        shells: "blue",
        foodIntakeSystem: "red",
        digestiveSystem: "green",
        metabolicSystem: "yellow",
        reproductionSystem: "purple",
        locomotorSystem: "white",
    }
    const [creature, changeCreature] = useState({
        creatureName: '',
        bodyParts: [],
        size: 1,
    })
    const lifeFormDetails = useSelector(state => state.lifeFormDetailsReducer);
    const [lifeFormDetailsKeys, changeLifeFormDetailsKeys] = useState(["bodies"]);
    const [currentBodyParts, changeCurrentBodyParts] = useState([]);

    const [systems, changeSystems] = useState(() => lifeFormDetailsKeys.map(key => ({
        title: textLoc[key],
        infoObject: lifeFormDetails[key]
    })));
    ///asdgagasdg
    /// asdfadsfasd
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
        console.log("new iteration")
        creature.bodyParts.map((part) => console.log(part.name))
    }, [currentBodyParts])

    function updateCreationFunc(bodyPartData, newKeys) {
        changeLifeFormDetailsKeys(newKeys)
        const creatureAvaluableParts = Object.keys(bodyPartData.avaliableBodyParts);
        changeCreature({
            creatureName: '',
            bodyParts: [],
            size: bodyPartData.size,
            typeOfCreature: bodyPartData.typeOfCreature,
            visualImage: bodyPartData.visualImage,
            avaliableBodyPartSlots: creatureAvaluableParts,
            bodyPartAmount: bodyPartData.avaliableBodyParts,
        })
    }

    const updateCreature = (bodyPartData) => {
        if (bodyPartData.type === "body" && bodyPartData.size === 1) {
            const newKeys = ["bodies", 'shells', 'foodIntakeSystem', 'reproductionSystem', "metabolicSystem"]
            updateCreationFunc(bodyPartData, newKeys)
        } else if (bodyPartData.type === "body" && bodyPartData.size > 1) {
            const newKeys = ["bodies", 'shells', 'foodIntakeSystem', 'reproductionSystem', "metabolicSystem", "locomotorSystem"]
            updateCreationFunc(bodyPartData, newKeys)
        }
    };

    const handleMouseEnter = (text) => {
        setInformationTooltipText(text);
    };

    return (
        <div className="lifecreation-menu-wrapper">
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
                                        selectedPropsCreatingElements={["cost", "strength", "bonuce"]}
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
                                onDrop={(e) => updateCreature(bodyPartData)}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {creature.visualImage &&
                                    <div>
                                        <img src={creature.visualImage} alt="Module" />

                                    </div>
                                }
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
                                                updateCreature={updateCreature}
                                                currentBodyParts={currentBodyParts}
                                                changeCurrentBodyParts={changeCurrentBodyParts}
                                            />)
                                    })
                                    }
                                </div>
                            }
                        </div>

                        <div className="constructor-details-menu">
                            {creature.visualImage &&
                                <InfoUnit
                                    title={textLoc[`lifeFormSummary`]}
                                    infoObject={creature.bodyPartAmount} />}
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