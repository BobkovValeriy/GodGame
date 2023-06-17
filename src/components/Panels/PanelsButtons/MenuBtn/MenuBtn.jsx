import { BsFillMenuButtonFill, BsFillMenuButtonWideFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { changeMenuVisible } from '../../../../store/menuReducer'
import { gameStop } from '../../../../store/gameRunReducer'
import React from "react"
import "./MenuBtn.scss"

function MenuBtn() {
    const dispatch = useDispatch();
    const menuVisible = useSelector(state => state.menu.menuStatus);

    function showMenu() {
        dispatch(changeMenuVisible());
        dispatch(gameStop());
    }

    return (
        <div className={`panel__under-element panel__under-element-2`} onClick={showMenu}>
            {menuVisible ? <BsFillMenuButtonFill className="menu__button" /> : <BsFillMenuButtonWideFill className="menu__button-open" />}
        </div>
    )
}

export default MenuBtn;