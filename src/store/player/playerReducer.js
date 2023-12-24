import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer';

const playerReducer = createSlice({
    name: "player",
    initialState: {
        showGreating: true,
        showPlayerRegistration: false,
        showPlayerLogin: false,
        playerLogined: false,
        showAstral: false,
        showLifeCreationMenu: false,
        date: 0,
        playerEnergy: 7000,
        playerEnergyMaxHousing: 0,
        playerEnergyProduction: 0,
        playerEnergyConsumption: 0,
        energyDifference: 0,
        playerAstralTileLimits: 0,
        playerAstralTileCount: 1,
        playerAstralTileMultiplier: 1,
        playerAstralTileCost: 100,
        playerAstralBuildCards: ["spawningThrone", "energyAccumulator", "energyAccumulator"],
        playerSkills:["sunRay1","astralScan", "move", "createLifeForm"],
        astralCoordinatesCompiled: false,
        spawnLifeFormMultiplier: 0,
        astralMidCoords: {
            x: 0,
            y: 0
        },
        prevAstralMidCoords: {
            x: 0,
            y: 0
        },
        playerBuildTiles: {
            firstBuildTile: {
                ind: "firstBuildTile",
                building: "spiritualDwelling",
                coordinates: {
                    x: 0,
                    y: 0,
                },
                neighborRays: {
                    nord: {
                        name: "nord",
                        active: false,
                        finish: { x: 0, y: 0 }, // Вверх
                        oposite: "east",
                        buildTile: null,
                        neighbor: null
                    },
                    nordwest: {
                        name: "nordwest",
                        active: false,
                        finish: { x: 0, y: 0 }, // Вверх-влево
                        oposite: "southeast",
                        buildTile: null,
                        neighbor: null
                    },
                    nordeast: {
                        name: "nordeast",
                        active: false,
                        finish: { x: 0, y: 0 }, // Вверх-вправо
                        oposite: "southwest",
                        buildTile: null,
                        neighbor: null
                    },
                    south: {
                        name: "south",
                        active: false,
                        finish: { x: 0, y: 0 }, // Вниз
                        oposite: "nord",
                        buildTile: null,
                        neighbor: null
                    },
                    southwest: {
                        name: "southwest",
                        active: false,
                        finish: { x: 0, y: 0 }, // Вниз-влево
                        oposite: "nordeast",
                        buildTile: null,
                        neighbor: null
                    },
                    southeast: {
                        name: "southeast",
                        active: false,
                        finish: { x: 0, y: 0 }, // Вниз-вправо
                        oposite: "nordwest",
                        buildTile: null,
                        neighbor: null
                    },
                },
            }
        },

        playerName: '',
        playerPass: '',
        maxPlayerCreatures: 0,
        canAddCreature: true,
        playerCreatures: [],
    },
    reducers: {
        playerNameChange(state, action) {
            return {
                ...state,
                playerName: action.payload,
            };
        },
        playerPassChange(state, action) {
            return {
                ...state,
                playerPass: action.payload,
            };
        },
        changeGreatingTrue(state, action) {
            return {
                ...state,
                showGreating: true,
            };
        },
        changeGreatingFalse(state, action) {
            return {
                ...state,
                showGreating: false,
            };
        },
        playerRegistrationShowTrue(state, action) {
            return {
                ...state,
                showPlayerRegistration: true,
            };
        },
        playerRegistrationShowFalse(state, action) {
            return {
                ...state,
                showPlayerRegistration: false,
            };
        },
        changePlayerLoginTrue(state, action) {
            return {
                ...state,
                showPlayerLogin: true,
            };
        },
        changePlayerLoginFalse(state, action) {
            return {
                ...state,
                showPlayerLogin: false,
            };
        },
        changeMaxPlayerCreatures(state, action) {
            state.maxPlayerCreatures += action.payload
        },
        savePlayerCreatures(state, action) {
            const max = state.playerCreatures.length - 1
            if (state.maxPlayerCreatures > max) {
                state.playerCreatures.push(action.payload)
            } else {
                state.canAddCreature = false
            }
        },
        changeSpawnLifeFormMultiplier(state, action) {
            state.spawnLifeFormMultiplier = action.payload
        },
        logined(state, action) {
            return {
                ...state,
                playerLogined: true,
            };
        },
        changeLifeCreationMenuVisible(state, action) {
            return {
                ...state,
                showLifeCreationMenu: !state.showLifeCreationMenu,
            };
        },
        changeAstralVisible(state, action) {
            return {
                ...state,
                showAstral: !state.showAstral,
            };
        },
        addPlayerBuildTiles(state, action) {
            const newBuildTile = action.payload;
            const prevPlayerAstralTileCost = state.playerAstralTileCost
            const prevPlayerAstralTileCount = state.playerAstralTileCount
            const updatedPlayerBuildTiles = {
                ...state.playerBuildTiles,
                [newBuildTile.ind]: {
                    ...newBuildTile,
                },
            };

            const newState = {
                ...state,
                playerBuildTiles: updatedPlayerBuildTiles,
                playerAstralTileCost: prevPlayerAstralTileCost * 2 * state.playerAstralTileMultiplier,
                playerAstralTileCount: prevPlayerAstralTileCount + 1,
            };

            return newState;
        },
        changePlayerBuildTileNeighborRay(state, action) {
            const tilename = action.payload.tilename;
            const rayName = action.payload.rayName;
            const neighbor = action.payload.neighbor;

            return produce(state, (draftState) => {
                const updatedTile = draftState.playerBuildTiles[tilename];
                updatedTile.neighborRays[rayName].active = true;
                updatedTile.neighborRays[rayName].neighbor = neighbor;
            });
        },
        changePlayerBuildTiles(state, action) {
            const newBuildTile = action.payload;
            const newBuildTileInd = newBuildTile.ind;
            const newState = {
                ...state,
                playerBuildTiles: {
                    ...state.playerBuildTiles,
                    [newBuildTileInd]: newBuildTile
                }
            };
            return newState;
        },
        changeAstralMidCoordinates(state, action) {
            const newX = action.payload.x
            const newY = action.payload.y
            const newCoords = {
                x: newX,
                y: newY
            }
            const newState = {
                ...state,
                astralMidCoords: newCoords
            }

            return newState;
        },
        changePrevAstralMidCoordinates(state, action) {
            const newX = action.payload.x
            const newY = action.payload.y
            const newCoords = {
                x: newX,
                y: newY
            }
            const newState = {
                ...state,
                prevAstralMidCoordinates: newCoords
            }

            return newState;
        },
        changeAstralCoordinatesCompiled(state, action) {
            return {
                ...state,
                astralCoordinatesCompiled: !state.astralCoordinatesCompiled
            }
        },
        changePlayerAstralTileLimits(state, action) {
            state.playerAstralTileLimits = action.payload
        },
        changePlayerAstralTileMultiplier(state, action) {
            state.playerAstralTileMultiplier = 1 + action.payload
        },
        playerEnergyMaxHousingChange(state, action) {
            state.playerEnergyMaxHousing = action.payload
        },
        playerSkillsUpdate(state, action){
            const newSkill = action.payload.newSkill
            state.playerSkills = newSkill;
        },
        playerRemoveSkill(state, action){
            const removingSkill = action.payload.skill;
            const index = state.playerSkills.indexOf(removingSkill)
            if (index !== -1) {
                const prevArr = [...state.playerSkills];
                prevArr.splice(index, 1);
                state.playerSkills = prevArr;
            }
        },
        energyChange(state, action) {
            state.energy += state.energyDifference
        },
        energyProductionChange(state, action) {
            state.playerEnergyProduction = action.payload;
            state.energyDifference = state.playerEnergyProduction - state.playerEnergyConsumption;
        },
        energyConsumptionChange(state, action) {
            state.playerEnergyConsumption = action.payload;
            state.energyDifference = state.playerEnergyProduction - state.playerEnergyConsumption;
        },
        energyAdd(state, action) {
            state.playerEnergy += action.payload
        },
        energyRemove(state, action) {
            const newState = {
                ...state,
                playerEnergy: state.playerEnergy - action.payload,
            }
            return newState
        },
        nextDay(state, action) {
            state.date += 1;
            const energyDiff = state.playerEnergy + state.energyDifference
            if (energyDiff > state.playerEnergyMaxHousing) {
                state.playerEnergy = state.energyDifference
            }
            else if (energyDiff <= state.playerEnergyMaxHousing) {
                state.playerEnergy += state.energyDifference
            }
        },
        buildStructure(state, action) {
            const buildTileName = action.payload.buildTileName
            const focusedCard = action.payload.focusedCard
            const cost = action.payload.cost

            state.playerBuildTiles[buildTileName].building = focusedCard
            const index = state.playerAstralBuildCards.indexOf(focusedCard)
            if (index !== -1) {
                const prevArr = [...state.playerAstralBuildCards];
                prevArr.splice(index, 1);
                state.playerAstralBuildCards = prevArr;
            }
            state.playerEnergy -= cost
        }
    }
});

export const {
    playerNameChange,
    changeGreatingTrue,
    changeGreatingFalse,
    playerPassChange,
    playerRegistrationShowTrue,
    playerRegistrationShowFalse,
    playerSkillsUpdate,
    playerRemoveSkill,
    changePlayerLoginTrue,
    changePlayerLoginFalse,
    changeMaxPlayerCreatures,
    changeSpawnLifeFormMultiplier,
    changeLifeCreationMenuVisible,
    addPlayerBuildTiles,
    changePlayerAstralTileMultiplier,
    changePlayerAstralTileLimits,
    changePlayerBuildTiles,
    changePlayerBuildTileNeighborRay,
    changeAstralMidCoordinates,
    changePrevAstralMidCoordinates,
    changeAstralCoordinatesCompiled,
    changeAstralVisible,
    savePlayerCreatures,
    energyChange,
    playerEnergyMaxHousingChange,
    playerEnergyMaxHousing,
    energyProductionChange,
    energyConsumptionChange,
    buildStructure,
    energyAdd,
    energyRemove,
    nextDay,
    logined,
} = playerReducer.actions;

export default playerReducer.reducer;