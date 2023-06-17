import { createSlice } from '@reduxjs/toolkit';

const gameRunReducer = createSlice({
    name: "gameRunStatus",
    initialState: {
        gameRunStatus: false,
    },
    reducers: {
        changeGameRunStatus(state, action) {
            state.gameRunStatus = !state.gameRunStatus
            console.log(state.gameRunStatus)
        },
        gameStop(state, action) {
            state.gameRunStatus = false
            console.log(state.gameRunStatus)
        }
    }
});

export const { changeGameRunStatus, gameStop } = gameRunReducer.actions;

export default gameRunReducer.reducer;