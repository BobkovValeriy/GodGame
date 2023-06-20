import React, { useMemo } from "react"
import "./GameField.scss"
import { CreateNewBiosphere } from "../../utils/biosphere"
import InfoUnit from "../InfoUnit/InfoUnit"

function GameField({ playerPlanetoid }) {
    const playerBiosphere = useMemo(() => new CreateNewBiosphere(playerPlanetoid), [
        playerPlanetoid,
    ])

    return (
        <div className="panel game__field">

            <div className="panel info__panel">
                <InfoUnit title={"биосфера"} infoObject={playerBiosphere} />
            </div>
            <div className="meteor__style"> "Here must be meteor!" </div>
        </div>
    )
};

export default GameField;