import React, { useState } from 'react';
import { ChangeEventHandler } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import GameCard from '../../Models/GameCard';

interface CardFilterProps {
    cards: GameCard[];
    onCardsChange: (filteredCards: GameCard[]) => void; 
}

const CardFilter = ({ cards, onCardsChange}: CardFilterProps) => {

    const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
        const val = ev.currentTarget.value || '';
        
        if (val) {
            const filtered = cards.filter((card) => card.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            onCardsChange(filtered);
        } else {
            onCardsChange(cards);
        }
    };

    return (<Form inline>
        <Form.Control placeholder="Filter... " onChange={(ev) => { handleChange(ev as any); }} />
    </Form>);
};

export default CardFilter;