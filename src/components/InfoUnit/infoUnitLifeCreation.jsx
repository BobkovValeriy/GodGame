import React, { useState } from "react";
import './infoUnitLifeCreation.scss';
import MovableButton from "../Panels/MovableButton/MovableButton";
import { useSelector } from "react-redux";

function InfoUnitLifeCreation({ title, infoObject, onMouseEnterCallback, selectedPropsCreatingElements, setBodyPartData, bodySize, typeOfCreature }) {
    const [showInfo, changeShowInfo] = useState(false);
    const textLoc = useSelector((state) => state.langagueReducer)
    const infoEntries = Object.entries(infoObject);

    function toggleShowInfo() {
        changeShowInfo(!showInfo);
    }

    function fillTooltip(innerObj, valueArr) {
        const filteredData = Object.entries(innerObj)
            .filter(([key]) => valueArr.includes(key))
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {});

        return filteredData
    }

    return (
        <div className="info__unit-life-wrapper">
            <div className="info__unit-life-title" onClick={toggleShowInfo}>
                {title}
            </div>
            {showInfo &&
                infoEntries.map(([key, value]) => {
                    const shouldRender =
                        value.type === "body" || (value.size <= bodySize && value.typeOfCreature === typeOfCreature);
                    return (
                        shouldRender && (
                            <div className="info__unit-life-unit" key={key}>
                                <MovableButton
                                    onMouseEnterCallback={onMouseEnterCallback}
                                    buttonImage={
                                        value.minImage ? (
                                            <img src={value.minImage} alt="" className="movable-button-img" />
                                        ) : (
                                            textLoc[value.name]
                                        )
                                    }
                                    bodyPartData={value}
                                    tooltipText={
                                        <span>
                                            {Object.entries(fillTooltip(value, selectedPropsCreatingElements)).map(
                                                ([key, value]) => (
                                                    <div key={key}>
                                                        {textLoc[key]} {typeof value === "number" ? value : textLoc[value]}
                                                    </div>
                                                )
                                            )}
                                        </span>
                                    }
                                    setBodyPartData={setBodyPartData}
                                />
                            </div>
                        )
                    );
                })}
        </div>
    );
}

export default InfoUnitLifeCreation;