
export function BuildTileGeneration(tilename, x, y, parentTile, rayName) {
    this.ind = tilename;
    this.building = "";
    this.parentTile = parentTile
    this.parentRay = rayName
    this.coordinates = {
        x: x,
        y: y
    };
    this.neighborRays = {
        nord: {
            name: "nord",
            active: false,
            finish: { x: this.coordinates.x, y: this.coordinates.y - 100 }, // Вверх
            oposite: "south",
            buildTile: null,
            neighbor: null
        },
        nordwest: {
            name: "nordwest",
            active: false,
            finish: { x: this.coordinates.x - 90, y: this.coordinates.y - 50 }, // Вверх-влево
            oposite: "southeast",
            buildTile: null,
            neighbor: null
        },
        nordeast: {
            name: "nordeast",
            active: false,
            finish: { x: this.coordinates.x + 90, y: this.coordinates.y - 50 }, // Вверх-вправо
            oposite: "southwest",
            buildTile: null,
            neighbor: null
        },
        south: {
            name: "south",
            active: false,
            finish: { x: this.coordinates.x, y: this.coordinates.y + 100 }, // Вниз
            oposite: "nord",
            buildTile: null,
            neighbor: null
        },
        southwest: {
            name: "southwest",
            active: false,
            finish: { x: this.coordinates.x - 90, y: this.coordinates.y + 50 }, // Вниз-влево
            oposite: "nordeast",
            buildTile: null,
            neighbor: null
        },
        southeast: {
            name: "southeast",
            active: false,
            finish: { x: this.coordinates.x + 90, y: this.coordinates.y + 50 }, // Вниз-вправо
            oposite: "nordwest",
            buildTile: null,
            neighbor: null
        },
    };
}