import GameRun from '../../GameRun/GameRun';
import PanelUnderControlls from "../PnaelUnderControlls/PanelUnderControlls";
import "./UnderPanel.scss"
import MainTheme from "../PanelsButtons/MainTheme/MainTheme";
import MenuBtn from "../PanelsButtons/MenuBtn/MenuBtn"
import AstralBtn from "../PanelsButtons/Astral/AstralBtn.jsx";
import CreateAstralEntity from "../PanelsButtons/CreateAstralEntity/CreateAstralEntity";

function UnderPanel() {

    return (
        <div className="panel panel-under">
            <PanelUnderControlls>
                <div className="panel__under-wrapper">

                    <MenuBtn />
                    <MainTheme />

                </div>
            </PanelUnderControlls>
            <PanelUnderControlls>
                <div className="panel__under-wrapper">
                    <AstralBtn />
                    <CreateAstralEntity />
                </div>
            </PanelUnderControlls>
            <GameRun />
        </div>
    )
};

export default UnderPanel;