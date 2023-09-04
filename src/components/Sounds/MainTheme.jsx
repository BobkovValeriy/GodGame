import { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePlayMainTheme } from "../../store/SoundsReducer";
// import audio from '../../track/cosmic_breath.mp3'

const MusicContext = createContext();

export const MainTheme = ({ children }) => {
    const mainTheme = useSelector(state => state.soundsReducer.mainTheme);
    const playMainTheme = useSelector(state => state.soundsReducer.playMainTheme);
    const dispatch = useDispatch()

    useEffect(() => {
        mainTheme.addEventListener('ended', () => {
            mainTheme.currentTime = 0;
            mainTheme.play();
        }, false);
        mainTheme.play();
    }, []);

    function playMusic() {
        if (playMainTheme) {
            dispatch(changePlayMainTheme())
            mainTheme.pause();
        } else {
            dispatch(changePlayMainTheme())
            mainTheme.play();
        };
    };

    return (
        <MusicContext.Provider value={{ playMainTheme, playMusic }}>
            {children}
        </MusicContext.Provider>
    );
}

export default MusicContext;