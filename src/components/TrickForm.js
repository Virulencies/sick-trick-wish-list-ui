import React, { useState } from 'react';

const TrickForm = ({ addTrick }) => {
  const [stance, setStance] = useState('regular');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('flatground');
  const [tutorial, setTutorial] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTrick = {
      stance,
      name,
      obstacle,
      tutorial,
      id: Date.now() // normally the backend would handle ID generation, but for this we'll just use Date.now
    };
    addTrick(newTrick); // clear the form
    setStance('regular');
    setName('');
    setObstacle('flatground');
    setTutorial('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose your Stance:
        <select value={stance} onChange={(e) => setStance(e.target.value)}>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
      </label>
      <label>
        Name of Trick:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Choose your Obstacle:
        <select value={obstacle} onChange={(e) => setObstacle(e.target.value)}>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
      </label>
      <label>
        Link to Youtube Tutorial:
        <input type="text" value={tutorial} onChange={(e) => setTutorial(e.target.value)} />
      </label>
      <button type="submit">Send It!</button>
    </form>
  );
};

export default TrickForm;
