import { createSlice } from '@reduxjs/toolkit';
import audio from '../track/cosmic_breath.mp3'

const soundsReducer = createSlice({
    name: "sounds",
    initialState: {
        playMainTheme: true,
        mainTheme: new Audio(audio),
    },
    reducers: {
        changePlayMainTheme(state, action) {
            state.playMainTheme = !state.playMainTheme;
        },
    }

});

export const { changePlayMainTheme } = soundsReducer.actions;

export default soundsReducer.reducer;