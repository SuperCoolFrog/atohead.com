import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Home.scss';
import CharacterTypeSymbol from '../../Components/CharacterTypeSymbol/CharacterTypeSymbol';
import CharacterType from '../../Models/CharacterType.enum';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const App = () => {
  return (<>
    <Jumbotron>
      <Container>
        <h1>Across the Obelisk - Tools and Guides</h1>
        <p>
          This site is a <em>Work in Progress</em>.  I wanted a way to share deck builds with my friend who got me into the game.  After searching online,
          I realized the game was too new to have something like this, so I created my own.  Feel free to use it.
        </p>
        <p>
          If you have any questions or concerns, please feel free to email me at <a href="mailto:michael.vasquez@smountaintech.com">michael.vasquez@smountaintech.com</a>.
        </p>
        <p>
          gghf,<br />
          Michael Vasquez
        </p>
      </Container>
    </Jumbotron>
    <Container>
      <h2>Craft a Deck</h2>
      <p>
        Create a deck with the deck builder tool.  You will get a shareable link that you can post or share with a friend.
      </p>
      <Row className={styles.deckBuilderLinkContainer}>
        <Col md={3}>
          <Link to="/deck-builder/warrior">
            <CharacterTypeSymbol characterType={CharacterType.WARRIOR}></CharacterTypeSymbol>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/deck-builder/scout">
            <CharacterTypeSymbol characterType={CharacterType.SCOUT}></CharacterTypeSymbol>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/deck-builder/mage">
            <CharacterTypeSymbol characterType={CharacterType.MAGE}></CharacterTypeSymbol>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/deck-builder/healer">
            <CharacterTypeSymbol characterType={CharacterType.HEALER}></CharacterTypeSymbol>
          </Link>
        </Col>
      </Row>
    
      <hr />

      <h2>ATO WIP and Coming Soon</h2>
      <p>
        Current work being done in the following areas to improve ATO Head:
        <ul>
          <li>Team Building Tool - Create a team and deck</li>
          <li>News Updates and highlights about Across the Obelisk</li>
          <li>Guides on teams and decks to try out</li>
        </ul>
      </p>
    </Container>
  </>);
}

export default App;
