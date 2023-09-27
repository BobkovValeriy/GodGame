import React, { useEffect, useState } from "react";
import BuildArray from "./BuildArray";
import { v4 as uuidv4 } from 'uuid';

function BuildTile({ area = null, canvas, direction = null, changeBuildTiles, ctx }) {
    const ind = uuidv4();
    const [x, chnageX] = useState(0);
    const [y, chnageY] = useState(0);
    const [building, changeBuilding] = useState();
    const [neighbor, changeNeighbor] = useState({
        nord: null,
        nordwest: null,
        nordsouth: null,
        east: null,
        eastwest: null,
        eastsouth: null,
    });
    const [neighborArray, changeNeighborArray] = useState([])
    if (area === 1) {
        chnageX(canvas.width / 2);
        chnageY(canvas.height / 2);
    }
    useEffect(() => {
        changeNeighborArray(Object.entries(neighbor))
    }, [neighbor])

    return (
        <div>
            {neighborArray.map(([neighborKey, neighborValue], index) => (
                // Используем BuildArray и передаем ему соответствующие значения
                <BuildArray
                    key={index} // Обязательно укажите уникальный ключ
                    from={ind}
                    direction={neighborValue}
                    fromArea={area}
                    fromInd={ind}
                    canvas={canvas}
                    changeNeighbor={changeNeighbor}
                    changeBuildTiles={changeBuildTiles}
                />
            ))}
        </div>
    )
}
export default BuildTile;