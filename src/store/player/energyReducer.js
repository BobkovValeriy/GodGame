import { createSlice } from "@reduxjs/toolkit";

const energyReducer = createSlice({
    name: "player energy",
    initialState: {
        playerEnergy: 0,
        playerEnergyProduction: 10,
        playerEnergyConsumption: 0,
        energyDifference: 10,
    },
    reducers: {
        energyChange(state, action) {
            state.energy += action.payload
        },
        energyProductionChange(state, action) {
            state.playerEnergyProduction += action.payload;
            state.energyDifference = state.playerEnergyProduction - state.playerEnergyConsumption;
        },
        energyConsumptionChange(state, action) {
            state.playerEnergyConsumption += action.payload;
            state.energyDifference = state.playerEnergyProduction - state.playerEnergyConsumption;
        }
    }
});

export const { energyChange, energyProductionChange, energyConsumptionChange } = energyReducer.actions;

export default energyReducer.reducer;