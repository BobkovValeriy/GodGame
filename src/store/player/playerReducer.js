import { createSlice } from "@reduxjs/toolkit";

const playerReducer = createSlice({
    name: "player",
    initialState: {
        showGreating: true,
        showPlayerRegistration: false,
        showPlayerLogin: false,
        playerLogined: false,
        showAstral: false,
        showLifeCreationMenu: false,
        playerAstralConstructionLimits: 3,
        playerAstralConstructionCardSlots: {
            1: {},
            2: {},
            3: {},
        },
        playerName: '',
        playerPass: '',
        maxPlayerCreatures: 3,
        canAddCreature: true,
        playerCreatures: [],
    },
    reducers: {
        playerNameChange(state, action) {
            return {
                ...state,
                playerName: action.payload,
            };
        },
        playerPassChange(state, action) {
            return {
                ...state,
                playerPass: action.payload,
            };
        },
        changeGreatingTrue(state, action) {
            return {
                ...state,
                showGreating: true,
            };
        },
        changeGreatingFalse(state, action) {
            return {
                ...state,
                showGreating: false,
            };
        },
        playerRegistrationShowTrue(state, action) {
            return {
                ...state,
                showPlayerRegistration: true,
            };
        },
        playerRegistrationShowFalse(state, action) {
            return {
                ...state,
                showPlayerRegistration: false,
            };
        },
        changePlayerLoginTrue(state, action) {
            return {
                ...state,
                showPlayerLogin: true,
            };
        },
        changePlayerLoginFalse(state, action) {
            return {
                ...state,
                showPlayerLogin: false,
            };
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
            return {
                ...state,
                playerLogined: true,
            };
        },
        changeLifeCreationMenuVisible(state, action) {
            return {
                ...state,
                showLifeCreationMenu: !state.showLifeCreationMenu,
            };
        },
        changeAstralVisible(state, action) {
            return {
                ...state,
                showAstral: !state.showAstral,
            };
        },
        changePlayerAstralConstructionLimits(state, action) {
            const changeAmount = action.payload;
            const newConstructionLimits = state.playerAstralConstructionLimits + changeAmount;
            const newState = {
                ...state,
                playerAstralConstructionLimits: newConstructionLimits,
            };

            return newState;
        }
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
    changeLifeCreationMenuVisible,
    changePlayerAstralConstructionLimits,
    changeAstralVisible,
    savePlayerCreatures,
    logined,
} = playerReducer.actions;

export default playerReducer.reducer;