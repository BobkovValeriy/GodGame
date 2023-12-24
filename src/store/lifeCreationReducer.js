import { createSlice } from '@reduxjs/toolkit';

const lifeCreationReducer = createSlice({
    name: "life creation menu",
    initialState: {
        showLifeCreationMenu: false,
    },
    reducers: {
        changeLifeCreationMenuVisible(state, action) {
            state.showLifeCreationMenu = !state.showLifeCreationMenu
        }
    }
});

export const { changeLifeCreationMenuVisible } = lifeCreationReducer.actions;

export default lifeCreationReducer.reducer;