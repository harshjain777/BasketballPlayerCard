import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard/BasketballPlayerCard';
import './App.css';

function App() {
  const playerStats = {
    pointsPerGame: 25.4,
    assistsPerGame: 7.1,
    reboundsPerGame: 8.3
  };

  const playerImages = [
    "https://via.placeholder.com/150?text=Player+1",
    "https://via.placeholder.com/150?text=Player+2",
    "https://via.placeholder.com/150?text=Player+3",
    "https://via.placeholder.com/150?text=Player+4",
    "https://via.placeholder.com/150?text=Player+5"
  ];

  const playerCards = playerImages.map((image, index) => (
    <BasketballPlayerCard
      key={index}
      name={`Player ${index + 1}`}
      image={image}
      position="Guard"
      stats={playerStats}
    />
  ));

  return (
    <div className="app">
      {playerCards}
    </div>
  );
}

export default App;
