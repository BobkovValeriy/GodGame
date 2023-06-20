import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGameRunStatus, changeGameSpeedUp, changeGameSpeedDown, changeGameSpeedRunning } from '../../../../store/gameRunReducer';
import './GameRunButtons.scss';
import { GiPauseButton, GiPlayButton } from "react-icons/gi";


function GameRunButtons() {
    const dispatch = useDispatch();
    const gameRunStatus = useSelector(state => state.gameRunReducer.gameRunStatus);
    const gameSpeed = useSelector(state => state.gameRunReducer.gameSpeed);
    const disabledMinus = gameSpeed === 1;
    const disabledPlus = gameSpeed === 5;

    const onMinusButtonClicked = () => {
        dispatch(changeGameSpeedDown())
    };
    const onPlusButtonClicked = () => {
        dispatch(changeGameSpeedUp())
    };

    const playGame = () => {
        dispatch(changeGameRunStatus())
    }

    return (
        <div className="running__buttons">
            <button type="button" className="speed-minus__button" onClick={onMinusButtonClicked} disabled={disabledMinus} > - </button>
            <div className="game__speed">{gameSpeed}</div>
            <button type="button" className="speed-plus__button" onClick={onPlusButtonClicked} disabled={disabledPlus}> + </button>
            <div className={`game__run`}>{gameRunStatus ? <GiPauseButton className="game__pause" /> : <GiPlayButton className='game__running' />}</div>
            <button type="button" className="turn__button" onClick={playGame}>{gameRunStatus ? 'stop' : 'run'}</button>
        </div>
    )
}

export default GameRunButtons
