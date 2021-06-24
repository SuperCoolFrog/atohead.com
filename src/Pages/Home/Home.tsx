import React from 'react';
import { Alert, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Home.scss';
import CharacterTypeSymbol from '../../Components/CharacterTypeSymbol/CharacterTypeSymbol';
import CharacterType from '../../Models/CharacterType.enum';
import Emoji from '../../Components/Emoji/Emoji';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const App = () => {
  return (<div className={styles.homeContainer}>
    <div className={styles.backgroundImage} />
    <Jumbotron>
      <Container>
        <Alert variant="warning">
          <strong><a href="https://store.steampowered.com/news/app/1385380/view/5581629847738913784" target='_blank'>Patch 0.6.5 is Live!</a></strong>
          - Currently we are only up to date to <strong>Patch (v.0.6.18)</strong> but we
          are excited to play through the new patch and get these updates included into the site.
        </Alert>
      </Container>
      <Container>
        <h1>Across the Obelisk - Tools and Guides (v.0.6.18d)</h1>
        <p>
          This site is a <em>Work in Progress</em><Emoji symbol="🚧" label="construction" />.  I wanted a way to share deck builds with my friend who got me into the game.  After searching online,
          I realized the game was too new to have something like this, so I created my own.  Feel free to use it.
        </p>
        <p>
          If you have any questions or concerns, please feel free to email me at <a href="mailto:michael.vasquez@smountaintech.com">michael.vasquez@smountaintech.com</a>.
        </p>
        <p>
          gghf,<br />
          <Emoji symbol="🤓" label="nerd face"/>Michael Vasquez
        </p>
        <hr />
        <p>
          <em>Special Thanks</em> to <Emoji symbol="🧠" label="brain"/><u>A Ghost</u> for unlocking all the cards so we have the images available
          (not to mention introducing me to the game).
        </p> 
      </Container>
    </Jumbotron>
    <Container className={styles.contentContainer}>
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
    </Container>
    <Container  className={styles.contentContainer}>
      <hr/>
      <h2>Coming Soon</h2>
      <p>
        Current work being done in the following areas to improve ATO Head:
        <ul>
          <li>Enemy Details</li>
          <li>Team Building Tool - Create a team and deck</li>
          <li>News Updates and highlights about Across the Obelisk</li>
          <li>Guides on teams and decks to try out</li>
        </ul>
      </p>
    </Container>
  </div>);
}

export default App;
