import React, { useRef, useState } from 'react';
import "./InfoButton.scss";

const ButtonWithInfo = ({ buttonImage,
    tooltipText,
    buttonEvent,
    styleProp,
    delayTime = 1500,
    onMouseEnterCallback,
    drag = false }) => {
    let styled = styleProp;
    const [showTooltip, setShowTooltip] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const timer = useRef(null);

    const handleMouseEnter = () => {
        // setIsLoading(true);

        timer.current = setTimeout(() => {
            // setIsLoading(false);
            setShowTooltip(true);
            if (onMouseEnterCallback) { onMouseEnterCallback(tooltipText) };
        }, delayTime);
    };

    const handleMouseLeave = () => {
        clearTimeout(timer.current);
        // setIsLoading(false);
        setShowTooltip(false);
    };

    return (
        <div
            className="info-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={buttonEvent}
            style={styled}
        >
            {buttonImage}
            {!onMouseEnterCallback && showTooltip && <div className="tooltip">{tooltipText}</div>}
        </div>
    );
};

export default ButtonWithInfo;