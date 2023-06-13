import { useState } from 'react';
import './App.scss';
import Game from './components/Game/Game';
import PlayerRegistration from './components/Panels/PlayerRegistration/PlayerRegistration';
//<CreatePlanetoid />

function App() {
  const [playerName, changePlayerName] = useState('');
  const [playerPass, changePlayerPass] = useState('');
  const [playerEnergy, changePlayerEnergy] = useState(1367);
  const [showRegistration, setShowRegistration] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowRegistration(false);
  };

  return (
    <div className='main'>
      {showRegistration ? <PlayerRegistration
        changePlayerName={changePlayerName}
        changePlayerPass={changePlayerPass}
        handleSubmit={handleSubmit}
      />
        :
        <Game playerEnergy={playerEnergy}
          changePlayerEnergy={changePlayerEnergy}
          playerName={playerName}
        />}
    </div>
  );
}

export default App;