import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAstralVisible } from "../../store/astralReducer";
import { useTexts } from "../../locales/langagueSwitch";
import "./Astral.scss"


function Astral() {
    const dispatch = useDispatch();

    function showAstral() {
        dispatch(changeAstralVisible());
    }
    return (
        <div className="astral-wrapper">
            <div className="astral-field">
                <button className="astral-field-entity" onClick={showAstral}>
                    {useTexts('backToFizik')}
                </button>
            </div>
        </div>
    )
}

export default Astral;