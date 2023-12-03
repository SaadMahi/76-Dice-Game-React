/* eslint-disable no-unused-vars */
import { Toaster } from 'react-hot-toast';

import { useState } from 'react';
import Home from './components/Home';
import './global.css';
import GamePage from './components/GamePage/GamePage';

function App() {
  const [startGame, setStartGame] = useState(false);

  return (
    <>
      {startGame ? <GamePage /> : <Home setStartGame={setStartGame} />}

      <Toaster />
    </>
  );
}

export default App;
