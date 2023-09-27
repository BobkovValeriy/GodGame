import { createSlice } from "@reduxjs/toolkit";
import archVisual from "../../img/lifeConstructor/bodies/ArchVisual.jpg"
import vibriss from "../../img/lifeConstructor/bodyParts/vibriss.jpg"
import leg from "../../img/lifeConstructor/bodyParts/leg.jpg"

const lifeFormDetailsReducer = createSlice({
    name: "life form details",
    initialState: {
        bodies: {
            archaea: {
                name: "archaea", // Археи
                type: "body",
                size: 1,
                bodyPartCost: 30,
                bodyPartStrength: 1,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    metabolicSystem: 3,
                    reproductionSystem: 1,
                },
                visualImage: archVisual,
                minImage: null,
                bonuce: "archaeaBonuce",
                typeOfCreature: "cellCreature",
            },
            eucariot: {
                name: "eucariot", // эукариот
                type: "body",
                size: 1,
                bodyPartCost: 60,
                bodyPartStrength: 2,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                },
                visualImage: archVisual,
                minImage: null,
                typeOfCreature: "cellCreature",
            },
            procariot: {
                name: "procariot", // прокариот
                type: "body",
                size: 2,
                bodyPartCost: 30,
                bodyPartStrength: 3,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                    locomotorSystem: 1,
                },
                visualImage: archVisual,
                minImage: null,
                typeOfCreature: "cellCreature",
            },
            smallMicroorganism: {
                name: "smallMicroorganism", // Малый микроорганизм
                type: "body",
                size: 2,
                bodyPartCost: 120,
                bodyPartStrength: 4,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    digestiveSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                    locomotorSystem: 1,
                },
                typeOfCreature: "cellCreature",
            },
            microorganism: {
                name: "microorganism", // Микроорганизм
                type: "body",
                size: 3,
                bodyPartCost: 120,
                bodyPartStrength: 5,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    digestiveSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                    locomotorSystem: 1,
                },
                typeOfCreature: "manyCellCreature",
            },
            bigMicroorganism: {
                name: "bigMicroorganism", // Большой микроорганизм
                type: "body",
                size: 4,
                bodyPartCost: 120,
                bodyPartStrength: 10,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    digestiveSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                    locomotorSystem: 1,
                },
                typeOfCreature: "manyCellCreature",
            },
            smallCreature: {
                name: "smallCreature", // Маленькое существо
                type: "body",
                size: 5,
                bodyPartStrength: 25,
                bodyPartCost: 100,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    digestiveSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                    locomotorSystem: 1,
                },
                typeOfCreature: "manyCellCreature",
            },
            mediumCreature: {
                name: "mediumCreature", // Среднее существо
                type: "body",
                size: 6,
                bodyPartStrength: 50,
                bodyPartCost: 150,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    digestiveSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                    locomotorSystem: 1,
                },
                typeOfCreature: "manyCellCreature",
            },
            largeCreature: {
                name: "largeCreature", // Крупное существо
                type: "body",
                size: 7,
                bodyPartStrength: 100,
                bodyPartCost: 250,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    digestiveSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                    locomotorSystem: 1,
                },
                typeOfCreature: "manyCellCreature",
            },
            megaCreature: {
                name: "megaCreature", // мега существо
                type: "body",
                size: 8,
                bodyPartStrength: 1000,
                bodyPartCost: 250,
                avaliableBodyParts: {
                    shells: 1,
                    foodIntakeSystem: 1,
                    digestiveSystem: 1,
                    metabolicSystem: 1,
                    reproductionSystem: 1,
                    locomotorSystem: 1,
                },
                typeOfCreature: "manyCellCreature",
            },
        },
        shells: {
            shellA: {
                name: "archeaShell", // Оболочка Aрхеи
                type: "shells",
                bodyPartCost: 5000,
                minTemperature: -128,
                maxTemperature: 350,
                bodyPartStrength: 2,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },
            shellB: {
                name: "shellB", // Оболочка B
                type: "shells",
                bodyPartCost: 70,
                minTemperature: -18,
                maxTemperature: 50,
                bodyPartStrength: 3,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },
            shellC: {
                name: "shellC", // Оболочка C
                type: "shells",
                bodyPartCost: 100,
                minTemperature: -18,
                maxTemperature: 50,
                bodyPartStrength: 5,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 3,
            },
            shellD: {
                name: "shellD", // Оболочка D
                type: "shells",
                bodyPartCost: 130,
                minTemperature: -30,
                maxTemperature: 50,
                bodyPartStrength: 7,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 3,
            },
            shellE: {
                name: "shellE", // Оболочка E
                type: "shells",
                bodyPartCost: 180,
                minTemperature: 0,
                maxTemperature: 30,
                bodyPartStrength: 10,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 4,
            },
        },
        foodIntakeSystem: {
            proboscis: {
                name: "proboscis", // Жгутик
                type: "foodIntakeSystem",
                bodyPartCost: 10,
                name: "proboscis", // Жгутик
                bodyPartStrength: 2,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },
            mouth: {
                name: "mouth", // Рот
                type: "foodIntakeSystem",
                bodyPartCost: 40,
                bodyPartStrength: 3,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 4,
            },
            beak: {
                name: "beak", // Клюв
                type: "foodIntakeSystem",
                bodyPartCost: 80,
                bodyPartStrength: 3,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 3,
            },
            tentacles: {
                name: "tentacles", // Щупальца
                type: "foodIntakeSystem",
                bodyPartCost: 60,
                bodyPartStrength: 4,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 2,
            },
        },
        digestiveSystem: {

        },
        reproductionSystem: {
            binaryFission: {
                name: "binaryFission",
                type: "reproductionSystem",
                bodyPartCost: 10,
                reproductionSpeed: 1000,
                bodyPartStrength: 1,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },
            budding: {
                name: "budding",
                type: "reproductionSystem",
                bodyPartCost: 100,
                reproductionSpeed: 200,
                bodyPartStrength: 2,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 2,
            },
            fragmentation: {
                name: "fragmentation",
                type: "reproductionSystem",
                bodyPartCost: 200,
                reproductionSpeed: 4,
                bodyPartStrength: 5,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 3,
            },
            parthenogenesis: {
                name: "parthenogenesis",
                type: "reproductionSystem",
                bodyPartCost: 300,
                reproductionSpeed: 300,
                bodyPartStrength: 3,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 4,
            },
            vegetativePropagation: {
                name: "vegetativePropagation",
                type: "reproductionSystem",
                bodyPartCost: 500,
                reproductionSpeed: 100,
                bodyPartStrength: 20,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 4,
            },
            sexualReproduction: {
                name: "sexualReproduction",
                type: "reproductionSystem",
                bodyPartCost: 1000,
                reproductionSpeed: 1,
                bodyPartStrength: 100,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 5,
            }

        },
        metabolicSystem: {
            greenHouseGasProduction: {
                name: "greenHouseGasProduction",
                type: "metabolicSystem",
                creatureConsume: {
                    soil: 0,
                },
                creatureProduce: {
                    greenhouseGas: 1,
                },
                bodyPartCost: 1,
                minImage: null,
                typeOfCreature: "any",
                size: 1,
                bonuce: "greenHouseGasBonuce"
            },
            staticBioMassProduction: {
                name: "bioMassProduction",
                type: "metabolicSystem",
                creatureConsume: {
                    soil: 0,
                },
                creatureProduce: {
                    staticBioMass: 1,
                },
                bodyPartCost: 1,
                minImage: null,
                typeOfCreature: "any",
                size: 1,
                bonuce: "bioMassProductionBonuce"
            },
            activeBioMassProduction: {
                name: "activeBioMassProduction",
                type: "metabolicSystem",
                creatureConsume: {
                    staticBioMass: 2,
                },
                creatureProduce: {
                    activeBioMass: 1,
                    staticBioMass: 1,
                },
                bodyPartCost: 100,
                minImage: null,
                typeOfCreature: "any",
                size: 2,
                bonuce: "activeBioMassProductionBonuce"
            },
            reconversionToStaticBioMass: {
                name: "reconversionToStaticBioMass",
                type: "metabolicSystem",
                creatureConsume: {
                    staticBioMass: 3,
                },
                creatureProduce: {
                    bioEnergy: 1,
                    staticBioMass: 1,
                    activeBioMass: 1,
                },
                bodyPartCost: 100,
                minImage: null,
                typeOfCreature: "any",
                size: 2,
                bonuce: "activeBioMassProductionBonuce"
            },
        },
        locomotorSystem: {
            legs: {
                name: "legs", // Ноги
                type: "locomotorSystem",
                bodyPartCost: 80,
                bodyPartStrength: 4,
                minImage: leg,
                creatureSpeed: 3,
                size: 4,
                typeOfCreature: "manyCellCreature",
            },
            wings: {
                name: "wings", // Крылья
                type: "locomotorSystem",
                bodyPartCost: 100,
                bodyPartStrength: 3,
                creatureSpeed: 4,
                size: 4,
                typeOfCreature: "manyCellCreature",
            },
            vibrissae: {
                name: "vibrissae", // Вибриссы
                type: "locomotorSystem",
                bodyPartCost: 120,
                bodyPartStrength: 1,
                creatureSpeed: 1,
                size: 1,
                typeOfCreature: "cellCreature",
                visualImage: vibriss,
                minImage: vibriss,
            },
            tentacles: {
                name: "tentacles", // Щупальца
                type: "locomotorSystem",
                bodyPartCost: 140,
                bodyPartStrength: 10,
                creatureSpeed: 2,
                size: 3,
                typeOfCreature: "cellCreature",
            },
        },
    },
    reducers: {
        openLifeFormDetail(state, action) {
            return state.action.payload
        }
    },
});
export const {
    openLifeFormDetail,
} = lifeFormDetailsReducer.actions;

export default lifeFormDetailsReducer.reducer;