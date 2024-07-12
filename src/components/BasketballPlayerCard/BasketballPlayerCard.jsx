import React from 'react';
import { FaBasketballBall, FaHandPaper, FaArrowsAlt } from 'react-icons/fa';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  const statItems = [
    { icon: <FaBasketballBall className="stat-icon" />, label: `Points per Game: ${stats.pointsPerGame}` },
    { icon: <FaHandPaper className="stat-icon" />, label: `Assists per Game: ${stats.assistsPerGame}` },
    { icon: <FaArrowsAlt className="stat-icon" />, label: `Rebounds per Game: ${stats.reboundsPerGame}` }
  ];

  return (
    <div className="player-card">
      <div className="player-image-container">
        <img src={image} alt={`${name}`} className="player-image" />
      </div>
      <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          {statItems.map((item, index) => (
            <div className="stat" key={index}>
              {item.icon}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
