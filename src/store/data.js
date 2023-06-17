import { configureStore } from '@reduxjs/toolkit';
import dateReduser from './dateReduser';
import gameRunReducer from './gameRunReducer';
import menuReducer from './menuReducer';
import energyReducer from './player/energyReducer';

export default configureStore({
    reducer: {
        date: dateReduser,
        gameRunStatus: gameRunReducer,
        menu: menuReducer,
        energy: energyReducer,
    }
})