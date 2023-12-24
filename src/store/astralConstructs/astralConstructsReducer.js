import { createSlice } from "@reduxjs/toolkit";
import spiritualDwellingImg from "../../img/AstralBuildings/spiritualDwelling120Hex.png"
import lifeFormBurauImg from "../../img/AstralBuildings/lifeFormBurau120Hex.png"
import spawningThroneImg from "../../img/AstralBuildings/spawningThrone.png"
import energyAccumulatorImg from "../../img/AstralBuildings/energyAccumulator120Hex.png"

const AstralConstructsReducer = createSlice({
    name: "AstralConstructsReducer",
    initialState:{
        astralConstructions:{
            spiritualDwelling:{
                name: "spiritualDwelling",
                type: "centralUnit",
                playerModiffiers:{
                    playerEnergyProduction: 100,
                    playerEnergyHousing: 10000,
                    playerAstralTileLimits: 3,
                    maxPlayerCreatures: 3,
                },
                skills: ["sunRay1","astralScan", "move", "createLifeForm"],
                image: spiritualDwellingImg,
                descr: "spiritualDwellingDescription",
                color: "orange",
            },
            lifeFormBurau:{
                name: "lifeFormBurau",
                type: "lifeCration",
                cost: 1500,
                playerModiffiers:{
                    maxPlayerCreatures: 3,
                },
                image: lifeFormBurauImg,
                descr: "lifeFormBurauDescription",
                color: "green",
            },
            spawningThrone: {
                name: "spawningThrone",
                type: "lifeCreation",
                cost: 3000,
                playerModiffiers:{
                    spawnLifeFormMultiplier: 0.95,
                },
                image: spawningThroneImg,
                descr: "spawningThroneDescription",
                color: "green",
            },
            energyAccumulator:{
                name: "energyAccumulator",
                type: "energyProduce",
                cost: 3000,
                playerModiffiers:{
                    playerEnergyHousing: 10000,
                },
                skills: ["overcharge"],//test skill
                image: energyAccumulatorImg,
                descr: "energyAccumulatorDescription",
                color: "yellow",
            }
        },
        skills:{
            sunRay1: {
                name: "sunRay1",
                descr: "sunRay1SkillDescription",
                
            },
            createLifeForm:{
                name: "createLifeForm",
                descr: "createLifeFormDescription"
            },
            astralScan: {
                name: "astralScan",
                descr: "astralScanDescription"
            },
            move:{
                name: "move",
                descr: "moveDescription"
            }
        }
    },
    reducers:{
        openAstralConstruct(){
            //Берём карточку строения
        }
    }
})
export const {
    openAstralConstruct,
} = AstralConstructsReducer.actions;

export default AstralConstructsReducer.reducer;