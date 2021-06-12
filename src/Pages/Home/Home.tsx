import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Home.scss';

const App = () => {
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
      <h2>Craft a Deck</h2>
      <p>
        Create a deck with the deck builder tool.  You will get a shareable link that you can post or share with a friend.
      </p>
      <Row>
        <Col md={3}>Warrior</Col>
        <Col md={3}>Scout</Col>
        <Col md={3}>Mage</Col>
        <Col md={3}>Healer</Col>
      </Row>

      <h2>Read or Submit Guides</h2>
      <p>
        Want to try a cool build?  Did you come up with a cool build?  Check out our guides and feel free to submit your own.
      </p>
      <Row>
        <Col md={3}>Guides</Col>
      </Row>
    </Container>
  </>);
}

export default App;
