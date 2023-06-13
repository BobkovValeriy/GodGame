import { useMemo } from 'react';
//, useEffect, useRef 

import './Game.scss'
import { CreateNewTerraPlanetoid } from '../../utils/planetoids'
import TopPanel from '../Panels/TopPanel/TopPanel';
import GameField from '../Gamefield/GameField';
import UnderPanel from '../Panels/UnderPanel/UnderPanel';

function Game(
    playerEnergy,
    changePlayerEnergy,
    playerName
) {
    const playerPlanetoid = useMemo(() => new CreateNewTerraPlanetoid(playerEnergy, playerName), [])

    return (
        <div className="wrapper">
            <TopPanel />
            <GameField playerPlanetoid={playerPlanetoid} />
            <UnderPanel />
        </div>
    );
}

export default Game;