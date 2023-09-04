import { createSlice } from "@reduxjs/toolkit";

const planetoidReducer = createSlice({
    name: 'planetoid',
    initialState: {
        id: 1,
        type: '',
        energyIncoming: 0,
        energyDistribution: 1, //в зависимости от размера планетоида количество енергии выделяемое на его обогрев нужно увеличивать, этот параметр отвечает за коэфициент усиления енергии.
        temperatureCelsius: 0,
        litosphere: {
            space: 0,
            capacity: 0,
            maxCapacity: 0,
            reflection: 0.3,
            options: [],
        },
        atmosphere: {
            heightRatio: 0,
            maxCapacity: 0,
            capacity: 0,
            reflection: 0,
            options: [],
        },
        hydrosphere: {
            ratio: 0,
            depthRatio: 0,
            maxCapacity: 0,
            capacity: 0,
            options: [],
        },
    },
    reducers: {
        initStartingTerraPlanetoid(state, action) {
            state.type = 'terra';
            state.litosphere.space = 1000000000; //Math.floor((Math.random() * 10 ** 9));
            state.hydrosphere.ratio = 0.7
            state.hydrosphere.depthRatio = 1000;
            state.hydrosphere.maxCapacity = Math.floor(state.litosphere.space * state.hydrosphere.ratio * state.hydrosphere.depthRatio);
            state.atmosphere.heightRatio = 1000000;
            state.atmosphere.maxCapacity = Math.floor(state.litosphere.space * state.atmosphere.heightRatio);
            state.litosphere.maxCapacity = Math.floor(state.litosphere.space * state.hydrosphere.ratio);
            state.litosphere.capacity = state.litosphere.maxCapacity;
            state.energyDistribution = Math.floor(state.litosphere.space / 1000000000);
            changeTemperatureCelsius();
        },
        changeEnergyIncoming(state, action) {
            state.energyIncoming = Math.floor(action.payload * 1.367 / state.energyDistribution);
        },
        changeTemperatureCelsius(state, action) {
            const albedo = parseFloat(((state.litosphere.reflection + state.atmosphere.reflection) / 2).toFixed(2)); // Альбедо Земли
            const surfaceAbsorption = 0.7; // Коэффициент поглощения поверхности Земли
            const emissivity = 0.95
            const surfaceFlux = state.energyIncoming * (1 - albedo) * surfaceAbsorption; // Поток энергии, поглощаемый поверхностью Земли, Вт/м²
            const stefBoltz = 5.670373 * Math.pow(10, -8);
            const solar = state.energyIncoming * (1 - albedo / 100); //Сначала рассчитаем солнечную постоянную S
            const surfaceTemperature = Math.pow((surfaceFlux / (stefBoltz * emissivity)), 1 / 4); // Затем рассчитаем температуру поверхности Земли:
            const atmTemperature = Math.pow((solar * (1 - albedo) / (4 * stefBoltz)), 1 / 4); // Далее рассчитаем температуру атмосферы:
            const avgTemperature = ((surfaceTemperature ** 4 + 2 * (surfaceTemperature ** 2) * atmTemperature ** 2 + atmTemperature ** 4) / 4) ** (1 / 4); // И среднегодовую температуру
            state.temperatureCelsius = Math.round(avgTemperature - 273.15);

        }
    }
})

export const {
    initStartingTerraPlanetoid,
    changeEnergyIncoming,
    changeTemperatureCelsius,
} = planetoidReducer.actions;

export default planetoidReducer.reducer;