import React from "react"
import "./Menu.scss"
import { useDispatch } from 'react-redux';
import { changeMenuVisible } from '../../store/menuReducer'

function Menu() {
    const dispatch = useDispatch();

    function showMenu() {
        dispatch(changeMenuVisible());
    }
    return (
        <div className="menu-wrapper">
            <div className="menu-punkts">
                <h2>Меню</h2>
                <button className="menu-punkt" >Сохранить</button>
                <button className="menu-punkt" >Загрузить</button>
                <button className="menu-punkt" onClick={showMenu}>Назад</button>
            </div>
        </div>
    )
}

export default Menu;