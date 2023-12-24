import React from "react";
import { useState } from "react";

function LifeCreationBar({ color, num, bodyPartData, type, currentBodyParts, changeCurrentBodyParts }) {
    const barStyle = {
        backgroundColor: color
    };
    const [minImage, changeMinImage] = useState('');
    const [currentPart, changeCurrentPart] = useState(null);

    function onDropHandler(part) {
        if (currentPart) {
            const existingPartIndex = currentBodyParts.findIndex(
                (existingPart) => existingPart.name === currentPart.name
            );;
            changeCurrentBodyParts((prevBodyParts) => [
                ...prevBodyParts.slice(0, existingPartIndex),
                ...prevBodyParts.slice(existingPartIndex + 1)])
        }
        changeCurrentPart(part)
        changeCurrentBodyParts((prevBodyParts) => [...prevBodyParts, part])
        changeMinImage(part.minImage)
    }
    function onDragOverHandler(e, bodyPartData) {
        if (bodyPartData.type === type) {
            e.preventDefault()
        }
    }

    return (
        <span className="bar-wrapper">
            {[...Array(num)].map((_, index) => (
                <span key={index}
                    className="bar-item"
                    style={barStyle}
                    onDrop={(e) => onDropHandler(bodyPartData)}
                    onDragOver={(e) => onDragOverHandler(e, bodyPartData)}
                >{minImage ? <image src={minImage} alt="Min Image" className="bar-min-image" /> : null}</span>
            ))}
        </span>
    );
}

export default LifeCreationBar;