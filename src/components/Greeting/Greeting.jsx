import React, { useEffect } from "react";
import './greeting.scss';
import { useDispatch, useSelector } from "react-redux";
import { textToEn, textToRu } from "../../store/langague/langagueReducer";
import { useTexts } from "../../locales/langagueSwitch";
import {
    changeGreatingFalse,
    playerRegistrationShowTrue,
    playerRegistrationShowFalse,
    changePlayerLoginTrue,
    changePlayerLoginFalse,
} from "../../store/player/playerReducer";

function Greeting() {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.langagueReducer.langague);

    const switchToRu = () => {
        if (lang !== "Russian") {
            dispatch(textToRu());
        }
    };

    const switchToEn = () => {
        if (lang !== "English") {
            dispatch(textToEn());
        }
    };
    const switchToLogin = (event) => {
        event.preventDefault();
        dispatch(changeGreatingFalse());
        dispatch(playerRegistrationShowFalse())
        dispatch(changePlayerLoginTrue())
    }
    const switchToRegistration = (event) => {
        event.preventDefault();
        dispatch(changeGreatingFalse());
        dispatch(playerRegistrationShowTrue());
        dispatch(changePlayerLoginFalse());
    }

    return (
        <div className="greeting-wrapper">
            <h1 className="langague-switch-header">{useTexts("langagueSwitch")}</h1>
            <div className="langague-switcher">
                <div className="langague-ru langague" onClick={switchToRu}>

                </div>
                <div className="langague-en langague" onClick={switchToEn}>

                </div>
            </div>
            <div className="login-registration">
                <div className="login-registration-header">{useTexts("greeting")}</div>
                <div className="login-registration-switchers">
                    <div className="login-registration-button" onClick={switchToLogin}>{useTexts("login")}</div>
                    <div className="login-registration-button" onClick={switchToRegistration}>{useTexts("registration")}</div>
                </div>
            </div>
        </div>
    );
}

export default Greeting;