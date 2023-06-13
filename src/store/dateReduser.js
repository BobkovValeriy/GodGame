import { createSlice } from '@reduxjs/toolkit';

const dateReducer = createSlice({
    name: "gameDate",
    initialState: {
        date: 0,
    },
    reducers: {
        nextDay(state, action) {
            state.date += 1
        }
    }
});

export const { nextDay } = dateReducer.actions;

export default dateReducer.reducer;