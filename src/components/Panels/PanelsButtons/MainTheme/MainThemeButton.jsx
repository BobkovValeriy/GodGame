import React, { useContext } from "react"
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import "./MainThemeButton.scss"
import MusicContext from "../../../Sounds/MainTheme";

function MainThemeButton() {
    const { playMainTheme, playMusic } = useContext(MusicContext);

    return (
        <div className={`panel__under-element panel__under-element-1`} onClick={playMusic}>
            {playMainTheme ? <GiPauseButton className="pause__button" /> : <GiPlayButton className="play__button" />}
        </div>
    )
}

export default MainThemeButton;