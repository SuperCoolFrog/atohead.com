import React, { useEffect, useState } from 'react';
import { default as GameCardModel } from '../../Models/GameCard';
import GameCard from '../GameCard/GameCard';
import { getCards } from '../../API/API';
import CharacterType from '../../Models/CharacterType.enum';
import { Col, Container, Row } from 'react-bootstrap';

interface DeckBuilderToolProps {
    characterType: CharacterType;
}

const DeckBuilderTool = (props: DeckBuilderToolProps) => {
    const [cards, setCards] = useState<GameCardModel[]>([]);
  
    useEffect(() => {
        getCards().then((cards) => {
            setCards(cards);
        });
    }, []);

    return (<Container>
        <Row>
            <Col md={6}>
                <h3>Deck</h3>
            </Col>
            <Col md={6}>
                <h3>Collection</h3>
                <Container>
                    {cards.map((card) => (<GameCard card={card} />))}
                </Container>
            </Col>
        </Row>
    </Container>);
};

export default DeckBuilderTool;