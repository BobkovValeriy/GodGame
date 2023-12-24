import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import "./PlayerRegistration.scss";
import {
    playerNameChange,
    playerPassChange,
    logined,
    playerRegistrationShowFalse,
    changeGreatingTrue,
    changePlayerLoginTrue,
    changeGreatingFalse,
    changePlayerLoginFalse,
} from "../../store/player/playerReducer";
import { useTexts } from "../../locales/langagueSwitch";
import { initStartingTerraPlanetoid } from "../../store/planetoid/planetoidReducer";

function PlayerRegistration() {
    const dispatch = useDispatch();
    const playerName = useSelector(state => state.playerReducer.playerName);
    const playerPassword = useSelector(state => state.playerReducer.playerPass);
    const [playerPasswordRepeat, changePlayerPasswordRepeat] = useState('');
    const passNotMatchText = useTexts('passNotMatch');
    const passNotValidText = useTexts('passNotValid');
    const loginNotValidText = useTexts('loginNotValidText');
    const [passNotMatch, changePassNotMatch] = useState(false);
    const [passNotValid, changePassNotValid] = useState(false);
    const [loginNotValid, changeLoginNotValid] = useState(false);



    const handleNameChange = (event) => {
        dispatch(playerNameChange(event.target.value));
    };

    const handlePasswordChange = (event) => {
        dispatch(playerPassChange(event.target.value));
    };

    const handlePasswordRepeatChange = (event) => {
        changePlayerPasswordRepeat(event.target.value);
    };

    const switchToLogin = (event) => {
        event.preventDefault();
        dispatch(changeGreatingFalse());
        dispatch(playerRegistrationShowFalse());
        dispatch(changePlayerLoginTrue());
    }
    const switchToGreating = (event) => {
        event.preventDefault();
        dispatch(changeGreatingTrue());
        dispatch(playerRegistrationShowFalse());
        dispatch(changePlayerLoginFalse());
    }

    const registrationTry = (event) => {
        event.preventDefault();

        const passwordRegex = /^(?=.*\d).{6,}$/;
        const isPasswordValid = passwordRegex.test(playerPassword);

        const loginRegex = /^(?!.*\s).{5,}$/;
        const isLoginValid = loginRegex.test(playerName);

        if (!isLoginValid) {
            console.log("Login should be at least 5 characters long and should not contain spaces");
            changeLoginNotValid(true);
            return;
        }

        if (!isPasswordValid) {
            console.log("Password should be at least 6 characters long and contain at least 1 digit");
            changePassNotValid(true);
            return;
        }

        const playerData = {
            name: playerName,
            password: playerPassword,
        };

        if (playerPassword === playerPasswordRepeat) {
            axios.post('/api/players/register', playerData)
                .then(response => {
                    // Handle successful response from the server
                    dispatch(playerRegistrationShowFalse());
                    dispatch(logined());
                    dispatch(initStartingTerraPlanetoid());
                })
                .catch(error => {
                    // Handle error from the server
                    console.log(error);
                });
        } else {
            changePassNotMatch(true);
        }
    }

    return (
        <div className="player__form">
            <div className="player-login-form-wrapper">
                <div className="login-lang-switch">
                    <div className="switch-btn" onClick={switchToLogin}>{useTexts("login")}</div>
                    <div className="switch-btn" onClick={switchToGreating}>{useTexts("toGreeting")}</div>
                </div>
                <div className="player__form-container">
                    <form onSubmit={registrationTry}>
                        <div>{useTexts("regName")}</div>
                        <label htmlFor="playername">
                            <b>{useTexts("name")}</b>
                        </label>
                        <input
                            type="text"
                            placeholder={useTexts('namePlaceholder')}
                            name="playername"
                            required
                            onChange={handleNameChange}
                        />
                        <p>{useTexts("regPass")}</p>
                        <div className="warning"> {loginNotValid ? loginNotValidText : null}</div>
                        <div className="pass-block">
                            <label htmlFor="psw">
                                <b>{useTexts("pass")}</b>
                            </label>
                            <input
                                type="password"
                                placeholder={useTexts("passPlaceholder")}
                                name="psw"
                                required
                                onChange={handlePasswordChange}
                            />
                            <label htmlFor="pswRep">
                                <b>{useTexts("passRep")}</b>
                            </label>
                            <input
                                type="password"
                                placeholder={useTexts("passPlaceholder")}
                                name="pswRep"
                                required
                                onChange={handlePasswordRepeatChange}
                            />
                            <div className="warning"> {passNotMatch ? passNotMatchText : null} {passNotValid ? passNotValidText : null} </div>
                        </div>
                        <button type="submit" className="registerbtn">
                            {useTexts("registrationBind")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PlayerRegistration;
