import React, { useEffect, useState } from 'react';
import { default as GameCardModel } from '../../Models/GameCard';
import DeckGameCard from '../../Models/DeckGameCard';
import GameCard from '../GameCard/GameCard';
import ScaledGameCard from '../ScaledGameCard/ScaledGameCard';
import { getCards } from '../../API/API';
import CharacterType from '../../Models/CharacterType.enum';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './deck-builder-tool.module.scss';
import Deck from '../../Models/Deck';
import { saveDeck } from '../../API/API';
import CardFilter from '../CardFilter/CardFilter';
import uuid from 'short-uuid';

interface DeckBuilderToolProps {
    deck: Deck;
}

function toTitleCase(str: string) {
    return str.replace(
        /\w\S*/g,
        function(txt:string) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

const DeckBuilderTool = ({ deck }: DeckBuilderToolProps) => {
    const [cards, setCards] = useState<GameCardModel[]>([]);
    const [currentDeck, setCurrentDeck] = useState(deck);
    const [filteredCards, setFilteredCards] = useState<GameCardModel[]>([]);
  
    useEffect(() => {
        getCards().then((cards) => {
            const characterTypeCards = cards.filter((card) => {
                return card.characterType === deck.characterType;
            });
            
            setCards(characterTypeCards);
            setFilteredCards(characterTypeCards);
        });
    }, [deck]);
    
    const addCardToDeck = (card: GameCardModel) => {
        const nuCard = {
            ...card,
            uid: uuid.generate() as string,
        } as DeckGameCard;
        const updatedDeck = {
            ...currentDeck,
            cards: [...currentDeck.cards, nuCard],
        }
        
        setCurrentDeck(updatedDeck);
        saveDeck(updatedDeck);
    };
    
    const removeCardFromDeck = (card: GameCardModel) => {
        const firstIdx = currentDeck.cards.findIndex((_card) => _card.serialNumber === card.serialNumber);
        const nuCardsArr = [...currentDeck.cards];

        nuCardsArr.splice(firstIdx, 1);

        const updatedDeck = {
            ...currentDeck,
            cards: nuCardsArr
        }
        
        setCurrentDeck(updatedDeck);
        saveDeck(updatedDeck);
    };
    
    const copyToClipboard = (str: string) => () => {
        navigator.clipboard.writeText(str).then(() => {
            alert('Link has been copied to Clipboard');
        })
    };
    
    const url = window.location.toString();
    const titleClassName = deck.characterType === CharacterType.WARRIOR
    ? styles.characterTitleWarrior
    : deck.characterType === CharacterType.SCOUT
    ? styles.characterTitleScout
    : deck.characterType === CharacterType.MAGE
    ? styles.characterTitleMage
    : styles.characterTitleHealer;

    return (<Container>
        <h2>You are working with <span className={titleClassName}>{toTitleCase(deck.characterType)}</span> cards.</h2>
        <p>
            Click on the cards to add or remove from deck.<br />
            Right click to view and add upgrades.<br />  Your deck is automatically saved.
        </p>
        <p>
            You can use the url <a title="Copy" onClick={copyToClipboard(url)} className={styles.copyUrl}>{url}</a> to share or edit this deck.
        </p>
        <hr />
        <Row>
            <Col md={6}>
                <Row>
                    <Col>
                        <h3>Deck</h3>
                    </Col>
                </Row>
                <hr />
                <Container className={styles.deckContainer}>
                    <Row>
                        {currentDeck.cards.map((card, i) => (
                            <Col md={4} className={styles.cardContainer} key={'deck-' + card.uid}>
                                <ScaledGameCard card={card} onClick={removeCardFromDeck} scaleToWidth={card.scaleToWidth} scaleToHeight={card.scaleToHeight} includeUpgrades={false} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Col>
            <Col md={6} className={styles.rightContainer}>
                <Row>
                    <Col>
                        <h3>Collection</h3>
                    </Col>
                    <Col>
                        <CardFilter cards={cards} onCardsChange={(_filteredCards) => { setFilteredCards(_filteredCards); }} />
                    </Col>
                </Row>
                <hr />
                <Container className={styles.collectionContainer}>
                    <Row>
                        {filteredCards.map((card) => (
                            <Col md={4} className={styles.cardContainer} key={'collection_' + card.characterType + card.serialNumber}>
                                <GameCard card={card} onClick={addCardToDeck} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>);
};

export default DeckBuilderTool;