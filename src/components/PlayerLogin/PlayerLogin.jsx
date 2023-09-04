import React from "react";
import axios from 'axios';
import "./PlayerLogin.scss";
import { useSelector } from "react-redux";
import { useTexts } from "../../locales/langagueSwitch";
import { useDispatch } from "react-redux";
import {
    logined,
    changeGreatingTrue,
    changeGreatingFalse,
    changePlayerLoginFalse,
    playerRegistrationShowFalse,
    playerRegistrationShowTrue,
    playerNameChange,
    playerPassChange
} from "../../store/player/playerReducer";
import { initStartingTerraPlanetoid } from "../../store/planetoid/planetoidReducer";

function PlayerLogin() {
    const dispatch = useDispatch();
    const playerName = useSelector(state => state.playerReducer.playerName);
    const playerPassword = useSelector(state => state.playerReducer.playerPass);


    const handleNameChange = (event) => {
        dispatch(playerNameChange(event.target.value));
    };

    const handlePasswordChange = (event) => {
        dispatch(playerPassChange(event.target.value));
    };

    const switchToRegistration = (event) => {
        event.preventDefault();
        dispatch(changeGreatingFalse());
        dispatch(playerRegistrationShowTrue());
        dispatch(changePlayerLoginFalse());
    }

    const switchToGreating = (event) => {
        event.preventDefault();
        dispatch(changeGreatingTrue());
        dispatch(playerRegistrationShowFalse());
        dispatch(changePlayerLoginFalse());
    }

    const loginToNoosphere = (event) => {
        event.preventDefault();

        const playerData = {
            name: playerName,// Получите имя игрока из состояния
            password: playerPassword,// Получите пароль игрока из состояния
        };

        axios.post('/api/players/login', playerData)
            .then(response => {
                // Обработка успешного ответа от сервера
                dispatch(changePlayerLoginFalse());
                dispatch(logined());
                dispatch(initStartingTerraPlanetoid());// временно пока не реализована загрузка сохранений.
            })
            .catch(error => {
                // Обработка ошибки от сервера
                console.log(error);
            });
    }
    return (
        <div className="player__form">
            <div className="player-login-form-wrapper">
                <div className="login-lang-switch">
                    <div className="switch-btn" onClick={switchToRegistration}>{useTexts("registration")}</div>
                    <div className="switch-btn" onClick={switchToGreating}>{useTexts("toGreeting")}</div>
                </div>
                <form className="player-login-form" onSubmit={loginToNoosphere}>
                    <div>
                        <label className="player-login-unit" htmlFor="playername">{useTexts("pleaseLogin")}</label>
                        <input
                            type="text"
                            placeholder={useTexts('namePlaceholder')}
                            name="playername"
                            required
                            onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="psw" className="player-login-unit">
                            {useTexts("passLogin")}
                        </label>
                        <input
                            type="password"
                            placeholder={useTexts("passPlaceholder")}
                            name="psw"
                            required
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        {useTexts("loginToNoosphere")}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PlayerLogin;