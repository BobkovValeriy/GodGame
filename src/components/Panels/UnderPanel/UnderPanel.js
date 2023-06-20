import GameRunButtons from '../../Panels/PanelsButtons/GameRunButtons/GameRunButtons';
import PanelUnderControlls from "../PnaelUnderControlls/PanelUnderControlls";
import "./UnderPanel.scss"
import MenuBtn from "../PanelsButtons/MenuBtn/MenuBtn"
import AstralBtn from "../PanelsButtons/Astral/AstralBtn.jsx";
import CreateAstralEntity from "../PanelsButtons/CreateAstralEntity/CreateAstralEntity";
import MainThemeButton from '../PanelsButtons/MainTheme/MainThemeButton';

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
                    <CreateAstralEntity />
                </div>
            </PanelUnderControlls>
            <GameRunButtons />
        </div>
    )
};

export default UnderPanel;