import React, { useMemo } from "react";
import "./GameField.scss";
import InfoUnit from "../InfoUnit/InfoUnit";
import { useSelector } from "react-redux";
import { useTexts } from "../../locales/langagueSwitch";

function GameField() {
    const playerPlanetoid = useSelector(state => state.planetoidReducer);

    const playerBiosphere = useMemo(() => {
        const biosphereFields = {
            bioHydrosphere: playerPlanetoid.hydrosphere?.capacity,
            bioAtmosphere: playerPlanetoid.atmosphere?.capacity,
            bioLitosphere: playerPlanetoid.litosphere?.capacity,
        };
        return biosphereFields;
    }, [playerPlanetoid]);

    return (
        <div className="panel game__field">
            <div className="panel info__panel">
                <InfoUnit title={useTexts("biosphere")} infoObject={playerBiosphere} />
            </div>
            <div className="meteor__style"> "Here must be meteor!" </div>
        </div>
    );
}

export default GameField;