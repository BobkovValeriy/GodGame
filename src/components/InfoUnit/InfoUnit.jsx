import React, { useState } from "react";
import LocalizedText from "../../locales/LocalizedText"
import { useSelector } from "react-redux";
import './InfoUnit.scss';

function InfoUnit({ title, infoObject, otherProps = null }) {
    const [showInfo, changeShowInfo] = useState(false);
    const infoEntries = Object.entries(infoObject);
    const textLoc = useSelector((state) => state.langagueReducer)
    function toggleShowInfo() {
        changeShowInfo(!showInfo);
    }

    return (
        <div className="info__unit-wrapper">
            <div className="info__unit-title" onClick={toggleShowInfo}>{title}</div>
            {otherProps ? <div>{textLoc["nameOfCreature"]} {otherProps}</div> : null}
            {showInfo ? (
                infoEntries.map(([key, value]) => (
                    <div className="info__unit-unit" key={key}>
                        {typeof value === 'object' ? <InfoUnit title={textLoc[key]} infoObject={value} /> : <span className="info__unit-key"><LocalizedText textKey={`${key}`} /> {value}</span>}
                    </div>
                ))
            ) : null}
        </div>
    )
}

export default InfoUnit;
