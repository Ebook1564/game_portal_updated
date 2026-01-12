import React, { useState } from 'react';
import GameCard from './GameCard';
import games from './data/games.json';

const GameList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', ...new Set(games.flatMap(game => game.categories))];

  const filteredGames = selectedCategory === 'all'
    ? games
    : games.filter(game => game.categories.includes(selectedCategory));

  return (
    <div>
      <div className="filters">
        {categories.map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="game-grid">
        {filteredGames.map(game => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
