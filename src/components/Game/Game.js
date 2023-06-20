import { useMemo } from 'react';
//, useEffect, useRef 

import './Game.scss'
import { CreateNewTerraPlanetoid } from '../../utils/planetoids'
import TopPanel from '../Panels/TopPanel/TopPanel';
import GameField from '../Gamefield/GameField';
import UnderPanel from '../Panels/UnderPanel/UnderPanel';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu'
import GameRun from '../GameRun/GameRun';
import { MainTheme } from '../Sounds/MainTheme';
import Astral from '../Astral/Astral';

function Game(
    playerEnergy,
    changePlayerEnergy,
    playerName
) {
    const astralVisible = useSelector(state => state.astralReducer.astralStatus)
    const menuVisible = useSelector(state => state.menu.menuStatus);
    const playerPlanetoid = useMemo(() => new CreateNewTerraPlanetoid(playerEnergy, playerName), [])

    return (
        <div className="wrapper">
            <MainTheme>
                {menuVisible ? <Menu /> : null}
                {astralVisible ? <Astral /> : null}
                <GameRun />
                <TopPanel />
                <GameField playerPlanetoid={playerPlanetoid} />
                <UnderPanel />
            </MainTheme>
        </div>
    );
}

export default Game;