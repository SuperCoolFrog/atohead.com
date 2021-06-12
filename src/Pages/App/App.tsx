import React, { useEffect, useState } from 'react';
import GameCard from '../../Components/GameCard/GameCard';
import { default as GameCardModel } from '../../Models/GameCard';
import './App.scss';

function App() {
  const [cards, setCards] = useState<GameCardModel[]>([]);
  
  useEffect(() => {
    
    fetch('/game-data/cards.json')
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      setCards(data.cards);
    });
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {cards.map((card) => (
        <GameCard card={card}></GameCard>
      ))}
    </div>
  );
}

export default App;
