import { createSlice } from "@reduxjs/toolkit";

const playerReducer = createSlice({
    name: "player",
    initialState: {
        showGreating: true,
        showPlayerRegistration: false,
        showPlayerLogin: false,
        playerLogined: false,
        showLifeCreation: false,
        showAstral: false,
        playerName: '',
        playerPass: '',
    },
    reducers: {
        playerNameChange(state, action) {
            state.playerName = action.payload;
        },
        playerPassChange(state, action) {
            state.playerPass = action.payload;
        },
        changeGreatingTrue(state, action) {
            state.showGreating = true;
        },
        changeGreatingFalse(state, action) {
            state.showGreating = false;
        },
        playerRegistrationShowTrue(state, action) {
            state.showPlayerRegistration = true;
        },
        playerRegistrationShowFalse(state, action) {
            state.showPlayerRegistration = false;
        },
        changePlayerLoginTrue(state, action) {
            state.showPlayerLogin = true;
        },
        changePlayerLoginFalse(state, action) {
            state.showPlayerLogin = false;
        },
        logined(state, action) {
            state.playerLogined = true;
        },
    }
});

export const {
    playerNameChange,
    changeGreatingTrue,
    changeGreatingFalse,
    playerPassChange,
    playerRegistrationShowTrue,
    playerRegistrationShowFalse,
    changePlayerLoginTrue,
    changePlayerLoginFalse,
    logined,
} = playerReducer.actions;

export default playerReducer.reducer;