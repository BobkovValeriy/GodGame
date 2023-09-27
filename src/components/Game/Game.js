import { useMemo } from 'react';
//, useEffect, useRef 

import './Game.scss'
import TopPanel from '../Panels/TopPanel/TopPanel';
import GameField from '../Gamefield/GameField';
import UnderPanel from '../Panels/UnderPanel/UnderPanel';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu'
import GameRun from '../GameRun/GameRun';
import { MainTheme } from '../Sounds/MainTheme';
import Astral from '../Astral/Astral';
import LifeCreationMenu from '../LifeCreation/LifeCreationMenu'

function Game(playerEnergy) {
    const playerName = useSelector(state => state.playerReducer.name);
    const astralVisible = useSelector(state => state.playerReducer.showAstral)
    const menuVisible = useSelector(state => state.menu.menuStatus);
    const showLifeCreation = useSelector(state => state.playerReducer.showLifeCreationMenu);


    return (
        <div className="wrapper">
            <MainTheme>
                {menuVisible ? <Menu /> : null}
                {astralVisible ? <Astral /> : null}
                {showLifeCreation ? <LifeCreationMenu /> : null}
                <GameRun />
                <TopPanel />
                <GameField />
                <UnderPanel />
            </MainTheme>
        </div>
    );
}

export default Game;