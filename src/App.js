import { useEffect } from "react";
import "./App.scss";
import Game from "./components/Game/Game";
// import PlayerRegistration from "./components/PlayerRegistration/PlayerRegistration";
// import PlayerLogin from "./components/PlayerLogin/PlayerLogin";
// import Greeting from "./components/Greeting/Greeting";
import { useDispatch, useSelector } from "react-redux";
import { textToRu } from "./store/langague/langagueReducer";
//<CreatePlanetoid />

function App() {
  // const showGreeting = useSelector((state) => state.playerReducer.showGreating);
  // const showRegistration = useSelector(
  //   (state) => state.playerReducer.showPlayerRegistration
  // );
  // const showPlayerLogin = useSelector(
  //   (state) => state.playerReducer.showPlayerLogin
  // );
  // const playerLogined = useSelector(
  //   (state) => state.playerReducer.playerLogined
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(textToRu());
  }, []);

  return (
    <div className="main">
      {/* {showGreeting && <Greeting />}
      {showRegistration && <PlayerRegistration />}
      {showPlayerLogin && <PlayerLogin />}
      {playerLogined && <Game />} */}
      <Game/>
      {/* Временное ограничение функциональности 
      входа, для упрощения тестировки в финальной версии удалить эту строку и раскоментировать остальное. */}
    </div>
  );
}

export default App;
