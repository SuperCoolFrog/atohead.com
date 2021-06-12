import React from 'react';
import { default as GameCardModel } from '../../Models/GameCard';

interface GameCardProps {
    card: GameCardModel;
    onClick?: (card:GameCardModel) => void;
}

const GameCard = ({ card, onClick }: GameCardProps) => {
    const background = `url(${card.image}) ${card.spriteLeft} ${card.spriteTop}`
    
    const handleClick = () => {
        if (onClick) {
            onClick(card);
        }
    };

    return (<div onClick={handleClick} style={{ background, height: card.spriteHeight, width: card.spriteWidth }}></div>);
};

export default GameCard;