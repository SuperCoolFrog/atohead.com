import React, { useEffect, useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import GameCard from '../../Components/GameCard/GameCard';
import { default as GameCardModel } from '../../Models/GameCard';
import './Home.scss';

function App() {
  // const [cards, setCards] = useState<GameCardModel[]>([]);
  
  // useEffect(() => {
    
  //   fetch('/game-data/cards.json')
  //   .then(response => response.json())
  //   .then(data => { 
  //     console.log(data)
  //     setCards(data.cards);
  //   });
    
  // }, []);

  return (<>
    <Jumbotron>
      <Container>
        <h1>Across the Obelisk - Tools and Guides</h1>
        <p>
          gghf
        </p>
      </Container>
    </Jumbotron>
  </>);
}

export default App;
