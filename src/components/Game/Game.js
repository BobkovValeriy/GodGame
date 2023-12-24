import { useEffect } from "react";
//, useEffect, useRef

import "./Game.scss";
import TopPanel from "../Panels/TopPanel/TopPanel";
import GameField from "../Gamefield/GameField";
import UnderPanel from "../Panels/UnderPanel/UnderPanel";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/Menu";
import GameRun from "../GameRun/GameRun";
import { MainTheme } from "../Sounds/MainTheme";
import Astral from "../Astral/Astral";
import LifeCreationMenu from "../LifeCreation/LifeCreationMenu";
import { playerSkillsUpdate } from "../../store/player/playerReducer";
import { playerCompileEffects } from "../../utils/playerCompileEffects";

function Game() {
  const playerName = useSelector((state) => state.playerReducer.name);
  const dispatch = useDispatch();
  const astralVisible = useSelector((state) => state.playerReducer.showAstral);
  const menuVisible = useSelector((state) => state.menu.menuStatus);
  const showLifeCreation = useSelector(
    (state) => state.playerReducer.showLifeCreationMenu
  );
  //Вычисление модификаторов игрока
  const playerBuildTiles = useSelector(
    (state) => state.playerReducer.playerBuildTiles
  );
  const astralConstructions = useSelector(
    (state) => state.astralConstructsReducer.astralConstructions
  );
  const playerSkills = useSelector((state) => state.playerReducer.playerSkills);
  useEffect(() => {
    const playerBuildModiffiers = {};
    const newPlayerSkills = [];

    Object.values(playerBuildTiles).forEach((buildTile) => {
      const buildingName = buildTile.building;
      if (buildingName) {
        const buildingModiffiers =
          astralConstructions[buildingName].playerModiffiers;

        Object.entries(buildingModiffiers).forEach(([key, value]) => {
          if (key in playerBuildModiffiers) {
            playerBuildModiffiers[key] += value;
          } else {
            playerBuildModiffiers[key] = value;
          }

          const skills = astralConstructions[buildingName].skills;

          if (skills) {
            skills.forEach((skill) => {
              // Проверка, что playerSkills существует и является массивом
              if (Array.isArray(playerSkills)) {
                const index = playerSkills.indexOf(skill);

                if (index === -1) {
                  newPlayerSkills.push(skill);
                }
              }
            });
          }
        });
      }
    });

    dispatch(playerSkillsUpdate(newPlayerSkills));
    playerCompileEffects(playerBuildModiffiers, dispatch);
  }, [playerBuildTiles, astralConstructions]);
  // useEffect(()=>{
  //     console.log(playerSkills)
  // },[playerSkills])

  return (
    <div className="wrapper">
      <MainTheme>
        {menuVisible ? <Menu /> : null}
        {astralVisible ? <Astral /> : null}
        {showLifeCreation ? <LifeCreationMenu /> : null}
        <GameRun />
        <TopPanel />
        <GameField />
        <UnderPanel />
      </MainTheme>
    </div>
  );
}

export default Game;
