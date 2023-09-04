import { configureStore } from '@reduxjs/toolkit';
import dateReduser from './dateReduser';
import gameRunReducer from './gameRunReducer';
import menuReducer from './menuReducer';
import energyReducer from './player/energyReducer';
import soundsReducer from './SoundsReducer';
import astralReducer from './astralReducer';
import playerReducer from './player/playerReducer';
import langagueReducer from './langague/langagueReducer';
import planetoidReducer from './planetoid/planetoidReducer';
import lifeCreationReducer from './lifeCreationReducer';
import lifeFormDetailsReducer from './lifeFormConstructorDetails/lifeFormDetailsReducer';

export default configureStore({
    reducer: {
        date: dateReduser,
        gameRunReducer: gameRunReducer,
        menu: menuReducer,
        energy: energyReducer,
        soundsReducer: soundsReducer,
        astralReducer: astralReducer,
        playerReducer: playerReducer,
        langagueReducer: langagueReducer,
        planetoidReducer: planetoidReducer,
        lifeCreationReducer: lifeCreationReducer,
        lifeFormDetailsReducer: lifeFormDetailsReducer,
    }
})