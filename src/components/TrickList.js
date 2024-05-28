import React from 'react';

const TrickList = ({ tricks }) => {
  return (
    <div className="trick-list">
      {tricks.map(trick => (
        <div key={trick.id} className="trick-card">
          <h2>{trick.name}</h2>
          <p>Stance: {trick.stance}</p>
          <p>Obstacle: {trick.obstacle}</p>
          <a href={trick.tutorial} target="_blank">Link to Youtube Tutorial</a>
        </div>
      ))}
    </div>
  );
};

export default TrickList;
