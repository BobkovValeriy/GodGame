import React, { useState } from "react";
import "./PlayerRegistration.scss";

function PlayerRegistration({
    changePlayerName,
    changePlayerPass,
    handleSubmit
}) {

    const handleNameChange = (event) => {
        ;
        changePlayerName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        changePlayerPass(event.target.value);
    };

    return (
        <div className="player__form">
            <div className="player__form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Привязка</h1>
                    <p>Для того что бы привязать этот безжизненный осколок к себе назовите имя вашей сущности...</p>
                    <label htmlFor="playername">
                        <b>Имя</b>
                    </label>
                    <input
                        type="text"
                        placeholder="вашей сущности"
                        name="playername"
                        required
                        onChange={handleNameChange}
                    />
                    <p>Для того что бы этот осколок не украли у вас введите пароль доступа к его астральной проекции...</p>
                    <label htmlFor="psw">
                        <b>Пароль</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                        onChange={handlePasswordChange}
                    />
                    <button type="submit" className="registerbtn">
                        Привязать
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PlayerRegistration;