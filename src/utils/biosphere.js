export function CreateNewBiosphere(planetoid) {
    this.entities = [];
    this.landSpace = planetoid.litosphere.space;
    this.airCapacity = planetoid.atmosphere.capacity;
    this.hydrosphereCapacity = planetoid.hydrosphere.capacity;
    this.temperature = planetoid.temperatureCelsius;
}