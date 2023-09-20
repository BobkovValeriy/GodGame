import { configureStore } from '@reduxjs/toolkit';
import dateReduser from './dateReduser';
import gameRunReducer from './gameRunReducer';
import menuReducer from './menuReducer';
import energyReducer from './player/energyReducer';
import soundsReducer from './SoundsReducer';
import playerReducer from './player/playerReducer';
import langagueReducer from './langague/langagueReducer';
import planetoidReducer from './planetoid/planetoidReducer';
import lifeFormDetailsReducer from './lifeFormConstructorDetails/lifeFormDetailsReducer';

export default configureStore({
    reducer: {
        date: dateReduser,
        gameRunReducer: gameRunReducer,
        menu: menuReducer,
        energy: energyReducer,
        soundsReducer: soundsReducer,
        playerReducer: playerReducer,
        langagueReducer: langagueReducer,
        planetoidReducer: planetoidReducer,
        lifeFormDetailsReducer: lifeFormDetailsReducer,
    }
})