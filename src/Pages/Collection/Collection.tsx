import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { getCards } from '../../API/API';
import GameCard from '../../Components/SmallGameCard/SmallGameCard';
import { default as GameCardModel } from '../../Models/GameCard';
import CharacterType from '../../Models/CharacterType.enum';
import styles from './collection.module.scss';
import CardFilter from '../../Components/CardFilter/CardFilter';

const Collection = () => {
    const [cards, setCards] = useState<GameCardModel[]>([]);
    const [filteredCards, setFilteredCards] = useState<GameCardModel[]>([]);

    useEffect(() => {
        getCards().then((cards) => {
            setCards(cards);
            setFilteredCards(cards);
        });
    }, []);
    
    return (<Container className={styles.container}>
        <div className={styles.filterContainer}>
            <CardFilter cards={cards} onCardsChange={(_filteredCards) => { setFilteredCards(_filteredCards); }} />
        </div>
        <Tabs defaultActiveKey="warrior" id="uncontrolled-tab-example">
            <Tab eventKey="warrior" title="Warrior">
                <div className={styles.collectionRow}>
                    {filteredCards.filter(c => c.characterType === CharacterType.WARRIOR).map((card) => (
                        <GameCard card={card} key={card.characterType + card.serialNumber} />
                    ))}
                </div>
            </Tab>
            <Tab eventKey="scout" title="Scout">
                <div className={styles.collectionRow}>
                    {filteredCards.filter(c => c.characterType === CharacterType.SCOUT).map((card) => (
                        <GameCard card={card} key={card.characterType + card.serialNumber} />
                    ))}
                </div>
            </Tab>
            <Tab eventKey="mage" title="Mage">
                <div className={styles.collectionRow}>
                    {filteredCards.filter(c => c.characterType === CharacterType.MAGE).map((card) => (
                        <GameCard card={card} key={card.characterType + card.serialNumber} />
                    ))}
                </div>
            </Tab>
            <Tab eventKey="healer" title="Healer">
                <div className={styles.collectionRow}>
                    {filteredCards.filter(c => c.characterType === CharacterType.HEALER).map((card) => (
                        <GameCard card={card} key={card.characterType + card.serialNumber} />
                    ))}
                </div>
            </Tab>
        </Tabs>
        {/* <Row>
            {filteredCards.filter(c => c.characterType === CharacterType.WARRIOR).map((card) => (
                <Col className={styles.cardContainer} key={card.characterType + card.serialNumber}>
                    <GameCard card={card} />
                </Col>
            ))}
        </Row> */}
    </Container>);
    
};

export default Collection;