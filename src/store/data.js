import { configureStore } from '@reduxjs/toolkit';
import gameRunReducer from './gameRunReducer';
import menuReducer from './menuReducer';
import soundsReducer from './SoundsReducer';
import playerReducer from './player/playerReducer';
import langagueReducer from './langague/langagueReducer';
import planetoidReducer from './planetoid/planetoidReducer';
import lifeFormDetailsReducer from './lifeFormConstructorDetails/lifeFormDetailsReducer';
import astralConstructsReducer from "./astralConstructs/astralConstructsReducer"

export default configureStore({
    reducer: {
        gameRunReducer: gameRunReducer,
        menu: menuReducer,
        soundsReducer: soundsReducer,
        playerReducer: playerReducer,
        langagueReducer: langagueReducer,
        planetoidReducer: planetoidReducer,
        lifeFormDetailsReducer: lifeFormDetailsReducer,
        astralConstructsReducer: astralConstructsReducer,
    }
})