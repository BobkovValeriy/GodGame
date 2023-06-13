import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextDay } from '../../store/dateReduser';
import { changeGameRunStatus } from '../../store/gameRunReducer';
import { useState, useEffect, useRef } from 'react';
import './GameRun.scss';
import { GiPauseButton, GiPlayButton } from "react-icons/gi";


function GameRun() {
    const gameRunStatus = useSelector(state => state.gameRunStatus.gameRunStatus);
    const dispatch = useDispatch();
    const [gameSpeed, changeGameSpeed] = useState(1);
    const [gameSpeedRunning, changeGameSpeedRunning] = useState(5000);
    const disabledMinus = gameSpeed === 1;
    const disabledPlus = gameSpeed === 5;
    const mainInterval = useRef(null);
    useEffect(() => {
        changeGameSpeedRunning(5000 / gameSpeed)
    }, [gameSpeed]);

    const gameRunFunc = function () {
        if (gameRunStatus) {
            dispatch(changeGameRunStatus());
            clearInterval(mainInterval);
        } else {
            dispatch(changeGameRunStatus());
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === ' ') {
                console.log(event.key);
                gameRunFunc();
            } else if (event.key === '+') {
                console.log(event.key);
                onPlusButtonClicked();
            } else if (event.key === '-') {
                console.log(event.key);
                onMinusButtonClicked();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    function gameTurn() {
        dispatch(nextDay())
        //asteroidLife()
    }

    const onMinusButtonClicked = () => {
        if (gameSpeed > 1) {
            changeGameSpeed(gameSpeed - 1);
        }
    };
    const onPlusButtonClicked = () => {
        if (gameSpeed < 5) {
            changeGameSpeed(gameSpeed + 1);
        }
    };

    useEffect(() => {
        clearInterval(mainInterval.current);
        mainInterval.current = setInterval(() => {
            if (gameRunStatus) {
                gameTurn();

            } else {
                clearInterval(mainInterval.current);
            }
        }, gameSpeedRunning);
    }, [gameSpeedRunning, gameRunStatus])
    return (
        <div className="running__buttons">
            <button type="button" className="speed-minus__button" onClick={onMinusButtonClicked} disabled={disabledMinus} > - </button>
            <div className="game__speed">{gameSpeed}</div>
            <button type="button" className="speed-plus__button" onClick={onPlusButtonClicked} disabled={disabledPlus}> + </button>
            <div className={`game__run`}>{gameRunStatus ? <GiPauseButton className="game__pause" /> : <GiPlayButton className='game__running' />}</div>
            <button type="button" className="turn__button" onClick={gameRunFunc}>{gameRunStatus ? 'stop' : 'run'}</button>
        </div>
    )
}

export default GameRun
