import { createSlice } from "@reduxjs/toolkit";
import archVisual from "../../img/lifeConstructor/bodies/ArchVisual.jpg"
import vibriss from "../../img/lifeConstructor/bodyParts/vibriss.jpg"
import leg from "../../img/lifeConstructor/bodyParts/leg.jpg"

const lifeFormDetailsReducer = createSlice({
    name: "life form details",
    initialState: {
        bodies: {
            archaea: {
                type: "body",
                size: 1,
                cost: 30,
                name: "archaea", // Археи
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
                type: "body",
                size: 1,
                cost: 60,
                name: "eucariot", // эукариот
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
                type: "body",
                size: 2,
                cost: 30,
                name: "procariot", // прокариот
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
                type: "body",
                size: 2,
                cost: 120,
                name: "smallMicroorganism", // Микроорганизм
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
                type: "body",
                size: 3,
                cost: 120,
                name: "microorganism", // Микроорганизм
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
                type: "body",
                size: 4,
                cost: 120,
                name: "bigMicroorganism", // Микроорганизм
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
                type: "body",
                size: 5,
                cost: 100,
                name: "smallCreature", // Маленькое существо
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
                type: "body",
                size: 6,
                cost: 150,
                name: "mediumCreature", // Среднее существо
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
                type: "body",
                size: 7,
                cost: 250,
                name: "largeCreature", // Крупное существо
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
                type: "body",
                size: 8,
                cost: 250,
                name: "megaCreature", // мега существо
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
                type: "shells",
                cost: 5000,
                name: "shellA", // Оболочка A
                minTemperature: -128,
                maxTemperature: 350,
                strength: 2,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },
            shellB: {
                type: "shells",
                cost: 70,
                name: "shellB", // Оболочка B
                minTemperature: -18,
                maxTemperature: 50,
                strength: 3,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },
            shellC: {
                type: "shells",
                cost: 100,
                name: "shellC", // Оболочка C
                minTemperature: -18,
                maxTemperature: 50,
                strength: 5,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 3,
            },
            shellD: {
                type: "shells",
                cost: 130,
                name: "shellD", // Оболочка D
                minTemperature: -30,
                maxTemperature: 50,
                strength: 7,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 3,
            },
            shellE: {
                type: "shells",
                cost: 180,
                name: "shellE", // Оболочка E
                minTemperature: 0,
                maxTemperature: 30,
                strength: 10,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 4,
            },
        },
        foodIntakeSystem: {
            proboscis: {
                type: "foodIntakeSystem",
                cost: 10,
                name: "proboscis", // Жгутик
                strength: 2,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },
            mouth: {
                type: "foodIntakeSystem",
                cost: 40,
                name: "mouth", // Рот
                strength: 3,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 4,
            },
            beak: {
                type: "foodIntakeSystem",
                cost: 80,
                name: "beak", // Клюв
                strength: 3,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 3,
            },
            tentacles: {
                type: "foodIntakeSystem",
                cost: 60,
                name: "tentacles", // Щупальца
                strength: 4,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 2,
            },
        },
        digestiveSystem: {

        },
        reproductionSystem: {
            binaryFission: {
                type: "reproductionSystem",
                cost: 10,
                name: "binaryFission",
                reproductionSpeed: 1000,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },
            budding: {
                type: "reproductionSystem",
                cost: 100,
                name: "budding",
                reproductionSpeed: 200,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 2,
            },
            fragmentation: {
                type: "reproductionSystem",
                cost: 200,
                name: "fragmentation",
                reproductionSpeed: 4,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 3,
            },
            parthenogenesis: {
                type: "reproductionSystem",
                cost: 300,
                name: "parthenogenesis",
                reproductionSpeed: 300,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 4,
            },
            vegetativePropagation: {
                type: "reproductionSystem",
                cost: 500,
                name: "vegetativePropagation",
                reproductionSpeed: 100,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 4,
            },
            sexualReproduction: {
                type: "reproductionSystem",
                cost: 1000,
                name: "sexualReproduction",
                reproductionSpeed: 1,
                minImage: null,
                typeOfCreature: "manyCellCreature",
                size: 5,
            }

        },
        metabolicSystem: {
            binaryFission: {
                type: "reproductionSystem",
                cost: 10,
                name: "binaryFission",
                reproductionSpeed: 1000,
                minImage: null,
                typeOfCreature: "cellCreature",
                size: 1,
            },/// временная заглушка
        },
        locomotorSystem: {
            legs: {
                type: "locomotorSystem",
                cost: 80,
                name: "legs", // Ноги
                strength: 4,
                minImage: leg,
                speed: 3,
                size: 4,
                typeOfCreature: "manyCellCreature",
            },
            wings: {
                type: "locomotorSystem",
                cost: 100,
                name: "wings", // Крылья
                strength: 3,
                speed: 4,
                size: 4,
                typeOfCreature: "manyCellCreature",
            },
            vibrissae: {
                type: "locomotorSystem",
                cost: 120,
                name: "vibrissae", // Вибриссы
                strength: 1,
                speed: 1,
                size: 1,
                typeOfCreature: "cellCreature",
                visualImage: vibriss,
                minImage: vibriss,
            },
            tentacles: {
                type: "locomotorSystem",
                cost: 140,
                name: "tentacles", // Щупальца
                strength: 10,
                speed: 2,
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