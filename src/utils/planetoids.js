export function CreateNewTerraPlanetoid(energyFromPlayer, playerName) {
    this.owner = playerName
    this.energyIncoming = parseFloat(energyFromPlayer * 1.367).toFixed(1);
    this.id = Number(new Date);
    this.type = 'terra';

    this.litosphere = {
        space: Math.floor((Math.random() * 10 ** 9)),
        reflection: 0.3,
        otherOptions: [],
    }
    this.atmosphere = {
        capacity: this.litosphere.space * 2000,
        reflection: 0.3,
        otherOptions: [],
    }
    const spaceHydrosphere = Math.floor((this.litosphere.space / 100) * 70);
    this.hydrosphere = {
        space: spaceHydrosphere,
        capacity: spaceHydrosphere * 1000,
        otherOptions: []
    }

    this.albedo = parseFloat(((this.litosphere.reflection + this.atmosphere.reflection) / 2).toFixed(2)); // Альбедо Земли
    this.surfaceAbsorption = 0.7; // Коэффициент поглощения поверхности Земли
    this.emissivity = 0.95
    this.temperatureCelsius = MidYearlyTemperature(this.energyIncoming = 1367, this.albedo, this.surfaceAbsorption)

    function MidYearlyTemperature(energyIncoming, albedo, surfaceAbsorption) {
        const surfaceFlux = energyIncoming * (1 - albedo) * surfaceAbsorption; // Поток энергии, поглощаемый поверхностью Земли, Вт/м²
        const stefBoltz = 5.670373 * Math.pow(10, -8);
        const solar = energyIncoming * (1 - albedo / 100); //Сначала рассчитаем солнечную постоянную S
        const emissivity = 0.95
        const surfaceTemperature = Math.pow((surfaceFlux / (stefBoltz * emissivity)), 1 / 4); // Затем рассчитаем температуру поверхности Земли:
        const atmTemperature = Math.pow((solar * (1 - albedo) / (4 * stefBoltz)), 1 / 4); // Далее рассчитаем температуру атмосферы:
        const avgTemperature = ((surfaceTemperature ** 4 + 2 * (surfaceTemperature ** 2) * atmTemperature ** 2 + atmTemperature ** 4) / 4) ** (1 / 4); // И среднегодовую температуру
        const avgTemperatureCelcius = Math.round(avgTemperature - 273.15);
        return avgTemperatureCelcius
    }
};