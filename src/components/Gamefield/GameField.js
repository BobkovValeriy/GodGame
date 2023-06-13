import React, { useMemo } from "react"
import "./GameField.scss"
import { useSelector } from "react-redux"
import { CreateNewBiosphere } from "../../utils/biosphere"
import InfoUnit from "../InfoUnit/InfoUnit"
import Menu from "../Menu/Menu"

function GameField({ playerPlanetoid }) {
    const playerBiosphere = useMemo(() => new CreateNewBiosphere(playerPlanetoid), [
        playerPlanetoid,
    ])
    const menuVisible = useSelector(state => state.menu.menuStatus);

    return (
        <div className="panel game__field">

            <div className="panel info__panel">
                <InfoUnit title={"биосфера"} infoObject={playerBiosphere} />
            </div>
            {menuVisible ? <Menu /> : <div className="meteor__style"> "Here must be meteor!" </div>}
        </div>
    )
};

export default GameField;