import React from "react";
import { changeLifeCreationMenuVisible } from "../../../../store/player/playerReducer";
import { GiDna2 } from "react-icons/gi"
import "./CreateLife.scss"
import { useDispatch, useSelector } from "react-redux";
import { gameStop } from "../../../../store/gameRunReducer";

function CreateLifeBtn() {
    const dispatch = useDispatch();
    const showLifeCreation = useSelector(state => state.playerReducer.showLifeCreationMenu);

    function showLifeCreationMenu() {
        dispatch(gameStop());
        dispatch(changeLifeCreationMenuVisible());
    }

    return (
        <div className={`panel__under-element panel__under-element-3`} onClick={showLifeCreationMenu}>
            {showLifeCreation ? <GiDna2 className="buildmenu-in" /> : <GiDna2 className="buildmenu-out" />}
        </div>
    )
}

export default CreateLifeBtn;