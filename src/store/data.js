import { configureStore } from '@reduxjs/toolkit';
import dateReduser from './dateReduser';
import gameRunReducer from './gameRunReducer';
import menuReducer from './menuReducer';
import energyReducer from './player/energyReducer';
import soundsReducer from './SoundsReducer';
import astralReducer from './astralReducer';

export default configureStore({
    reducer: {
        date: dateReduser,
        gameRunReducer: gameRunReducer,
        menu: menuReducer,
        energy: energyReducer,
        soundsReducer: soundsReducer,
        astralReducer: astralReducer,
    }
})