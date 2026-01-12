import React from 'react';
import GameCard from './GameCard';
import Gamelist from './GameList';

function App() {
  return (
    <div>
      <h1>Browse Games</h1>
      <GameCard />
      <Gamelist />
    </div>
  );
}

export default App;
