import React from 'react';

const GameCard = ({ game }) => {
  if (!game) {
    console.warn('GameCard received undefined game');
    return null;
  }

  const { thumb, title, embedUrl } = game;

  if (!thumb || !title || !embedUrl) {
    console.warn('GameCard missing fields', game);
    return null;
  }

  return (
    <div className="game-card">
      <img src={thumb} alt={title} />
      <h3>{title}</h3>
      <iframe
        src={embedUrl}
        width="100%"
        height="300"
        sandbox="allow-scripts"
        title={title}
      ></iframe>
    </div>
  );
};

export default GameCard;
