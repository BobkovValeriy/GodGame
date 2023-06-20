import React from "react";
import { changeAstralVisible } from "../../../../store/astralReducer";
import { gameStop } from "../../../../store/gameRunReducer";
import { GiGalaxy } from "react-icons/gi"
import "./AstralBtn.scss"
import { useSelector, useDispatch } from "react-redux";

function AstralBtn() {
    const lookAstral = useSelector(state => state.astralReducer.astralStatus);
    const dispatch = useDispatch();


    function showAstral() {
        dispatch(changeAstralVisible());
        dispatch(gameStop());
    }

    return (
        <div className={`panel__under-element panel__under-element-3`} onClick={showAstral}>
            {lookAstral ? <GiGalaxy className="inastral" /> : <GiGalaxy className="outastral" />}
        </div>
    )
}

export default AstralBtn;