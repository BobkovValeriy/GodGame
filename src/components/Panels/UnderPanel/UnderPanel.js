import GameRunButtons from '../../Panels/PanelsButtons/GameRunButtons/GameRunButtons';
import PanelUnderControlls from "../PanelUnderControlls/PanelUnderControlls";
import "./UnderPanel.scss"
import MenuBtn from "../PanelsButtons/MenuBtn/MenuBtn"
import AstralBtn from "../PanelsButtons/Astral/AstralBtn.jsx";
import MainThemeButton from '../PanelsButtons/MainTheme/MainThemeButton';
import CreateLifeBtn from '../PanelsButtons/CreateLife/CreateLifeBtn';

function UnderPanel() {

    return (
        <div className="panel panel-under">
            <PanelUnderControlls>
                <div className="panel__under-wrapper">

                    <MenuBtn />
                    <MainThemeButton />

                </div>
            </PanelUnderControlls>
            <PanelUnderControlls>
                <div className="panel__under-wrapper">
                    <AstralBtn />
                    <CreateLifeBtn />
                </div>
            </PanelUnderControlls>
            <GameRunButtons />
        </div>
    )
};

export default UnderPanel;