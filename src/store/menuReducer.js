import { createSlice } from '@reduxjs/toolkit';

const menuReducer = createSlice({
    name: "gameRunStatus",
    initialState: {
        menuStatus: false,
    },
    reducers: {
        changeMenuVisible(state, action) {
            state.menuStatus = !state.menuStatus
        }
    }
});

export const { changeMenuVisible } = menuReducer.actions;

export default menuReducer.reducer;