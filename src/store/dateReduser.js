import { createSlice } from '@reduxjs/toolkit';

const dateReducer = createSlice({
    name: "game date",
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