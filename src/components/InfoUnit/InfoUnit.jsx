import React, { useState } from "react";
import LocalizedText from "../../locales/LocalizedText"
import './InfoUnit.scss';

function InfoUnit({ title, infoObject }) {
    const [showInfo, changeShowInfo] = useState(false);
    const infoEntries = Object.entries(infoObject);

    function toggleShowInfo() {
        changeShowInfo(!showInfo);
    }

    return (
        <div className="info__unit-wrapper">
            <div className="info__unit-title" onClick={toggleShowInfo}>{title}</div>
            {showInfo ? (
                infoEntries.map(([key, value]) => (
                    <div className="info__unit-unit" key={key}>
                        <span className="info__unit-key"><LocalizedText textKey={`${key}`} /> {value}</span>
                    </div>
                ))
            ) : null}
        </div>
    )
}

export default InfoUnit;