import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAstralVisible } from "../../store/player/playerReducer";
import { useTexts } from "../../locales/langagueSwitch";
import { RiArrowGoBackLine } from "react-icons/ri";
import ButtonWithInfo from "../Panels/infoButton/ButtonWithInfo";
import "./Astral.scss"
import BuildTile from "./BuildTile";


function Astral() {
    const dispatch = useDispatch();
    const buildCardsAmount = useSelector(state => state.playerReducer.playerAstralConstructionLimits);
    const [buildTiles, changeBuildTiles] = useState({})
    const exitButtonStyle = {
        width: "50px",
        height: "50px"
    }
    function showAstral() {
        dispatch(changeAstralVisible());
    }

    return (
        <div className="astral-wrapper">
            <div className="astral-field">
                <div className="astral-entity-info">f</div>
                <div className="astral-construction-field">
                    <BuildTile
                        area={1}
                        changeBuildTiles={changeBuildTiles}
                    />
                </div>
                <div className="astral-entity-bar">
                    <ButtonWithInfo
                        buttonEvent={showAstral}
                        buttonImage={<RiArrowGoBackLine />}
                        tooltipText={useTexts('backToFizik')}
                        styleProp={exitButtonStyle}
                    />
                </div>
            </div>
        </div>
    )
}

export default Astral;