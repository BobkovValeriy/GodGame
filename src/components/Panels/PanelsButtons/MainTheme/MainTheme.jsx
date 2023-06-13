import React, { useEffect, useState } from "react"
import audio from '../../../../track/cosmic_breath.mp3';
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import "./MainTheme.scss"

function MainTheme() {
    const [playMainTheme, changePlayMainTheme] = useState(true);
    const [mainTheme] = useState(new Audio(audio));

    useEffect(() => {
        mainTheme.addEventListener('ended', () => {
            mainTheme.currentTime = 0;
            mainTheme.play();
        }, false);
        mainTheme.play();
    }, []);

    function playMusic() {

        if (playMainTheme) {
            changePlayMainTheme(false)
            mainTheme.pause();
        } else {
            changePlayMainTheme(true)
            mainTheme.play();
        };
    };
    return (
        <div className={`panel__under-element panel__under-element-1`} onClick={playMusic}>
            {playMainTheme ? <GiPauseButton className="pause__button" /> : <GiPlayButton className="play__button" />}
        </div>
    )
}

export default MainTheme;