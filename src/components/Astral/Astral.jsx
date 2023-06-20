import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAstralVisible } from "../../store/astralReducer";
import "./Astral.scss"


function Astral() {
    const lookAstral = useSelector(state => state.astralReducer.astralStatus);
    const dispatch = useDispatch();

    function showAstral() {
        dispatch(changeAstralVisible());
    }
    return (
        <div className="astral-wrapper">
            <div className="astral-field">
                <button className="astral-field-entity" onClick={showAstral}>
                    В физический мир
                </button>
            </div>
        </div>
    )
}

export default Astral;