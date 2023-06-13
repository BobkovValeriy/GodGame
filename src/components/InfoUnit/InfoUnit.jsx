import React, { useState } from "react";
import './InfoUnit.scss'

function InfoUnit({ title, infoObject }) {
    const [showInfo, changeShowInfo] = useState(false);
    const infoMassive = Object.values(infoObject);

    function toggleShowInfo() {
        changeShowInfo(!showInfo);
    }

    return (
        <div className="info__unit-wrapper">
            <div className="info__unit-title" onClick={toggleShowInfo}>{title}</div>
            {showInfo ? (
                infoMassive.map((el, idx) => (
                    <div className="info__unit-unit" key={idx}>
                        {el}
                    </div>
                ))
            ) : null}
        </div>
    )
}
export default InfoUnit