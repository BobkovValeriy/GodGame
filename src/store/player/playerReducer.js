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
        maxPlayerCreatures: 3,
        canAddCreature: true,
        playerCreatures: [],
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
        maxPlayerCreaturesAdd(state, action) {
            state.maxPlayerCreatures += action.payload
        },
        savePlayerCreatures(state, action) {
            const max = state.playerCreatures.length - 1
            if (state.maxPlayerCreatures > max) {
                state.playerCreatures.push(action.payload)
            } else {
                state.canAddCreature = false
            }
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
    savePlayerCreatures,
    logined,
} = playerReducer.actions;

export default playerReducer.reducer;