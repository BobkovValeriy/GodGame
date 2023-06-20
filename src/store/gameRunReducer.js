import { createSlice } from '@reduxjs/toolkit';

const gameRunReducer = createSlice({
    name: "gameRunStatus",
    initialState: {
        gameRunStatus: false,
        gameSpeed: Number(1),
        gameSpeedRunning: Number(5000),
    },
    reducers: {
        changeGameRunStatus(state, action) {
            state.gameRunStatus = !state.gameRunStatus
        },
        gameStop(state, action) {
            state.gameRunStatus = false
        },
        changeGameSpeedUp(state, action) {
            if (state.gameSpeed < 5) {
                state.gameSpeed = state.gameSpeed + 1;
            }
        },
        changeGameSpeedDown(state, action) {
            if (state.gameSpeed > 1) {
                state.gameSpeed = state.gameSpeed - 1;
            }
        },
        changeGameSpeedRunning(state, action) {
            state.gameSpeedRunning = Number(5000) / state.gameSpeed;
        }
    }
});

export const { changeGameRunStatus, gameStop, changeGameSpeedUp, changeGameSpeedDown, changeGameSpeedRunning } = gameRunReducer.actions;

export default gameRunReducer.reducer;