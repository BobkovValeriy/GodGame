import { configureStore } from '@reduxjs/toolkit';
import dateReduser from './dateReduser';
import gameRunReducer from './gameRunReducer';
import menuReducer from './menuReducer';

export default configureStore({
    reducer: {
        date: dateReduser,
        gameRunStatus: gameRunReducer,
        menu: menuReducer,
    }
})