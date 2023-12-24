import React from "react"
import { useSelector } from "react-redux";
import "./TopPanel.scss"

function TopPanel() {
    const gameDate = useSelector(state => state.playerReducer.date);
    const textLoc = useSelector((state) => state.langagueReducer);
    const playerEnergy = useSelector((state) => state.playerReducer.playerEnergy);
    const maxPlayerEnergy = useSelector((state) => state.playerReducer.playerEnergyMaxHousing);
    const energyDifference = useSelector((state) => state.playerReducer.energyDifference)

    return (
        <div className="panel panel-top">
            <div className="panel__top-resources">
                <div className="date">{textLoc["gameDate"]}<span className="day">{gameDate}</span> </div>
                <div className="resources">
                    {`${textLoc["playerEnergy"]}${playerEnergy} / ${maxPlayerEnergy} ${textLoc["playerEnergyDiff"]}${energyDifference}`} 
                </div>
            </div>
        </div>
    )
};

export default TopPanel;