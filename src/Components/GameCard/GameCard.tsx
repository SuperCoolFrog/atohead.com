import React from 'react';
import { default as GameCardModel } from '../../Models/GameCard';

interface GameCardProps {
    card: GameCardModel;
}

const GameCard = ({ card }: GameCardProps) => {
    const background = `url(${card.image}) ${card.spriteLeft} ${card.spriteTop}`

    return (<div style={{ background, height: card.spriteHeight, width: card.spriteWidth }}></div>);
};

export default GameCard;