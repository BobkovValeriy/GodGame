import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextDay } from '../../store/dateReduser';
import { changeGameRunStatus, changeGameSpeedUp, changeGameSpeedDown, changeGameSpeedRunning } from '../../store/gameRunReducer';
import { useEffect, useRef } from 'react';



function GameRun() {
    const gameRunStatus = useSelector(state => state.gameRunReducer.gameRunStatus);
    const gameSpeed = useSelector(state => state.gameRunReducer.gameSpeed);
    const gameSpeedRunning = useSelector(state => state.gameRunReducer.gameSpeedRunning);
    const dispatch = useDispatch();
    const mainInterval = useRef(null);

    useEffect(() => {
        dispatch(changeGameSpeedRunning());
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
                dispatch(changeGameSpeedUp());
            } else if (event.key === '-') {
                console.log(event.key);
                dispatch(changeGameSpeedDown());
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
        <div>

        </div>
    )
}

export default GameRun
