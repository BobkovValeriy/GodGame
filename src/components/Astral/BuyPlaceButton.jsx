import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import buyTileOverImgFalse from "../../img/Astral/Hex120BuyOver.png"
import buyTileOverImgTrue from "../../img/Astral/buyTileOverImgTrue.png"
import buyTileImg from "../../img/Astral/Hex120Buy.png"
import { useSelector } from "react-redux";

function BuyPlaceButton({ ray, createBuildTile, parentTile, changeInfo }) {
    const [isHovered, setIsHovered] = useState(false);
    const playerEnergy = useSelector(state=> state.playerReducer.playerEnergy);
    const tileCost = useSelector(state=> state.playerReducer.playerAstralTileCost);
    const textLoc = useSelector((state) => state.langagueReducer)
    const [tileImgSrc, changeTileImgSrc] = useState(buyTileImg)
    function hoverBuyPlaceButton(){
        setIsHovered(!isHovered)
        changeTileImgSrc(ray.active === false
            ? (isHovered ? buyTileImg  : (playerEnergy >= tileCost ? buyTileOverImgTrue : buyTileOverImgFalse))
            : null)
        if(playerEnergy >= tileCost){
            changeInfo(textLoc['youCanBuyAstralTile']+tileCost)
        }else changeInfo(textLoc['youCantBuyAstralTile']+tileCost)
    }
    function unHoverBuyPlaceButton(){
        setIsHovered(!isHovered)
        changeTileImgSrc(buyTileImg)
        changeInfo('')
    }
    const buyPlaceStyle = {
        left: ray.finish.x + 'px',
        top: ray.finish.y + 'px',
    };
    function buyTile() {
        const tileName = uuidv4()
        createBuildTile(tileName, ray.finish.x, ray.finish.y, parentTile.ind, ray.name);
    }
    return (
        <div className="buy-place"
        style={buyPlaceStyle}
        onClick={buyTile}
        onMouseEnter={() => hoverBuyPlaceButton()}
        onMouseLeave={() => unHoverBuyPlaceButton()}
        >
            <img src={tileImgSrc} alt="tile" />
        </div>
    )
}
export default BuyPlaceButton