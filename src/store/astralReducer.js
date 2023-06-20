import { createSlice } from '@reduxjs/toolkit';

const astralReducer = createSlice({
    name: "astralStatus",
    initialState: {
        astralStatus: false,
    },
    reducers: {
        changeAstralVisible(state, action) {
            state.astralStatus = !state.astralStatus
        }
    }
});

export const { changeAstralVisible } = astralReducer.actions;

export default astralReducer.reducer;