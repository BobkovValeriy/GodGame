import {energyProductionChange,
    playerEnergyMaxHousingChange,
    changePlayerAstralTileLimits,
    changeMaxPlayerCreatures,
    changeSpawnLifeFormMultiplier,
} from "../store/player/playerReducer"

export function playerCompileEffects (newEffectsObj, dispatch){
    Object.entries(newEffectsObj).forEach(([key, value])=>{
        const playerEffect = key
        switch(playerEffect){
            case "playerEnergyProduction":
                dispatch(energyProductionChange(value))
                break;
            case "playerEnergyHousing":
                dispatch(playerEnergyMaxHousingChange(value))
                break;
            case "playerAstralTileLimits":
                dispatch(changePlayerAstralTileLimits(value))
                break;
            case "maxPlayerCreatures":
                dispatch(changeMaxPlayerCreatures(value))
                break;
            case "spawnLifeFormMultiplier":
                dispatch(changeSpawnLifeFormMultiplier(value))
                break;
            default:
                console.log(playerEffect," = ", value);
        }
    })
}