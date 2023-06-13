import React, { useState } from "react";
import { GiGalaxy } from "react-icons/gi"
import "./AstralBtn.scss"

function AstralBtn() {
    const [lookAstral, changeLookAstral] = useState(false);

    function showAstral() {
        if (lookAstral) {
            changeLookAstral(false);
        } else {
            changeLookAstral(true);
        }
    }

    return (
        <div className={`panel__under-element panel__under-element-3`} onClick={showAstral}>
            {lookAstral ? <GiGalaxy className="inastral" /> : <GiGalaxy className="outastral" />}
        </div>
    )
}

export default AstralBtn;