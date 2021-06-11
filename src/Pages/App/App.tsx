import React, { useEffect, useState } from 'react';
import './App.scss';

interface Card {
    characterType: string;
    serialNumber: number;
    name: string;
    type: string;
    image: string;
    spriteLeft: string;
    spriteTop: string;
    spriteWidth: string;
    spriteHeight: string;
}

function App() {
  const [card, setCard] = useState<null|Card>(null);
  
  useEffect(() => {
    
    fetch('/game-data/cards.json')
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      const first = data.cards[0];
      setCard(first as Card);
    });
    
  }, []);
  
  const background = `url(${card?.image}) ${card?.spriteLeft} ${card?.spriteTop}`

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* <div className="game-card" style={{ background: 'url(/images/warrior_cards_page_1.png) -347px -160px' }}></div> */}
      <div style={{ background, height: card?.spriteHeight, width: card?.spriteWidth }}></div>
    </div>
  );
}

export default App;
