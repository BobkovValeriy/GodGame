import React, { useRef, useState } from 'react';
import "./MovableButton.scss";

const MovableButton = ({ buttonImage,
    tooltipText,
    delayTime = 300,
    onMouseEnterCallback,
    bodyPartData, setBodyPartData
}) => {

    const [showTooltip, setShowTooltip] = useState(false);
    const timer = useRef(null);

    const handleMouseEnter = () => {

        timer.current = setTimeout(() => {
            setShowTooltip(true);
            if (onMouseEnterCallback) { onMouseEnterCallback(tooltipText) };
        }, delayTime);
    };

    const handleMouseLeave = () => {
        clearTimeout(timer.current);

        setShowTooltip(false);
    };
    const handleDragStart = (e) => {
        setBodyPartData(bodyPartData)
    };
    return (
        <div
            className="movable-button"
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
            draggable
            onDragStart={(e) => handleDragStart(e)}
        >
            {buttonImage}
        </div>
    );
};

export default MovableButton;