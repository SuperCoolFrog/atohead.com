import React, { useEffect, useState } from 'react';
import { default as GameCardModel } from '../../Models/GameCard';
import GameCard from '../GameCard/GameCard';
import { getCards } from '../../API/API';
import CharacterType from '../../Models/CharacterType.enum';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './deck-builder-tool.module.scss';
import Deck from '../../Models/Deck';

interface DeckBuilderToolProps {
    deck: Deck;
}

const DeckBuilderTool = ({ deck }: DeckBuilderToolProps) => {
    const [cards, setCards] = useState<GameCardModel[]>([]);
    const [currentDeck, setCurrentDeck] = useState(deck);
  
    useEffect(() => {
        getCards().then((cards) => {
            setCards(cards.filter((card) => {
                return card.characterType === deck.characterType;
            }));
        });
    }, [deck]);
    
    const addCardToDeck = (card: GameCardModel) => {
        const updatedDeck = {
            ...currentDeck,
            cards: [...currentDeck.cards, card],
        }
        
        setCurrentDeck(updatedDeck);
    };

    return (<Container>
        <Row>
            <Col md={6}>
                <h3>Deck</h3>
                <Container className={styles.deckContainer}>
                    <Row>
                        {currentDeck.cards.map((card) => (
                            <Col md={4} className={styles.cardContainer}>
                                <GameCard card={card} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Col>
            <Col md={6} className={styles.rightContainer}>
                <h3>Collection</h3>
                <Container className={styles.collectionContainer}>
                    {cards.map((card) => (<GameCard card={card} onClick={addCardToDeck} />))}
                </Container>
            </Col>
        </Row>
    </Container>);
};

export default DeckBuilderTool;