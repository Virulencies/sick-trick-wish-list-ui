import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchTricks } from '../../api/trickCalls';
import TrickList from '../TrickList';
import TrickForm from '../TrickForm';



const App = () => {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    const getTricks = async () => {
      try {
        const data = await fetchTricks();
        setTricks(data);
      } catch (error) {
        console.error('Error fetching tricks:', error);
      }
    };

    getTricks();
  }, []);

  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick]);
  };

  
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <TrickForm addTrick={addTrick} />
      <TrickList tricks={tricks} />
    </div>
  );
};

export default App;