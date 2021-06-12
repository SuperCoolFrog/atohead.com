import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
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
    <Container>
      <Row>
        <Col md={4}>Something</Col>
        <Col md={4}>Something</Col>
        <Col md={4}>Something</Col>
      </Row>
    </Container>
  </>);
}

export default App;
