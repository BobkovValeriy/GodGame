import React, { useState } from "react";
import { MdAddHome } from "react-icons/md"
import "./CreateAstralEntity.scss"

function CreateAstralEntity() {
    const [lookAstralBuildMenu, changeLookAstralBuildMenu] = useState(false);

    function showAstralBuildMenu() {
        if (lookAstralBuildMenu) {
            changeLookAstralBuildMenu(false);
        } else {
            changeLookAstralBuildMenu(true);
        }
    }

    return (
        <div className={`panel__under-element panel__under-element-3`} onClick={showAstralBuildMenu}>
            {lookAstralBuildMenu ? <MdAddHome className="buildmenu-in" /> : <MdAddHome className="buildmenu-out" />}
        </div>
    )
}

export default CreateAstralEntity;