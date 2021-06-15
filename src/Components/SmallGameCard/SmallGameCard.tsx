import React from 'react';
import { default as GameCardModel } from '../../Models/GameCard';
import styles from './small-game-card.module.scss';

interface GameCardProps {
    card: GameCardModel;
    onClick?: (card:GameCardModel) => void;
}

const SmallGameCard = ({ card, onClick }: GameCardProps) => {
    const background = `url(${card.image}) ${card.spriteLeft} ${card.spriteTop}`
    // const backgroundSize = `${card.spriteWidth} ${card.spriteHeight}`;
    
    const handleClick = () => {
        if (onClick) {
            onClick(card);
        }
    };
    
    return (
        <div className={styles.gameCard} onClick={handleClick} style={{ background, height: card.spriteHeight, width: card.spriteWidth }}>
            { card.energyCost === "-1" && (<span className={styles.cardName}>{card.name}</span>) }
        </div>
    );
};

export default SmallGameCard;