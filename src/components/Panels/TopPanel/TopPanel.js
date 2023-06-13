import React from "react"
import { useSelector } from "react-redux";
import "./TopPanel.scss"

function TopPanel() {
    const gameDate = useSelector(state => state.date.date);

    return (
        <div className="panel panel-top">
            <div className="panel__top-resources">
                <div className="date">date: <span className="day">{gameDate}</span> </div>
                <div className="resources"> 0 </div>
            </div>
        </div>
    )
};

export default TopPanel;