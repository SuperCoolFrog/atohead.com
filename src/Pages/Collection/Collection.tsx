import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getCards } from '../../API/API';
import GameCard from '../../Components/SmallGameCard/SmallGameCard';
import { default as GameCardModel } from '../../Models/GameCard';
import CharacterType from '../../Models/CharacterType.enum';
import styles from './collection.module.scss';

const Collection = () => {
    const [cards, setCards] = useState<GameCardModel[]>([]);
    const [filteredCards, setFilteredCards] = useState<GameCardModel[]>([]);

    useEffect(() => {
        getCards().then((cards) => {
            setCards(cards);
            setFilteredCards(cards);
        });
    }, []);
    
    return (<Container>
        <h2>Warrior</h2>
        <Row>
            {filteredCards.filter(c => c.characterType === CharacterType.WARRIOR).map((card) => (
                <Col className={styles.cardContainer} key={card.characterType + card.serialNumber}>
                    <GameCard card={card} />
                </Col>
            ))}
        </Row>
    </Container>);
    
};

export default Collection;