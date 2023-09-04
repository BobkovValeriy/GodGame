import { createSlice } from "@reduxjs/toolkit";
import { ru } from '../../locales/ru'
import { en } from '../../locales/en'

const textReducer = createSlice({
    name: "texts",
    initialState: {
        langague: "Russian",
    },
    reducers: {
        textToRu(state, action) {
            console.log("Russian")
            state.langague = "Russian"
            Object.keys(ru).forEach((key) => {
                state[key] = ru[key];
            });
        },
        textToEn(state, action) {
            console.log("English")
            state.langague = "English"
            Object.keys(en).forEach((key) => {
                state[key] = en[key];
            });
        },
    }
});

export const { textToRu, textToEn } = textReducer.actions;

export default textReducer.reducer;