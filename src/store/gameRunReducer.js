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
        }
    }
});

export const { changeGameRunStatus } = gameRunReducer.actions;

export default gameRunReducer.reducer;