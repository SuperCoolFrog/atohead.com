import React, { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { default as GameCardModel } from '../../Models/GameCard';
import GameCard from '../GameCard/GameCard';
import styles from './small-game-card.module.scss';
import './small-game-card.scss';

interface GameCardProps {
    card: GameCardModel;
    onClick?: (card:GameCardModel) => void;
}

const SmallGameCard = ({ card, onClick }: GameCardProps) => {
    const [showModal, setShowModal] = useState(false);
    const background = `url(${card.image}) ${card.spriteLeft} ${card.spriteTop}`
    
    const handleClick = () => {
        if (onClick) {
            onClick(card);
        }
    };
    
    return (<OverlayTrigger
      key={'right'}
      placement={'right'}
      overlay={
        <Tooltip id={`tooltip-${card.characterType}-${card.serialNumber}`} className={styles.cardToolTip}>
          <GameCard card={card} />
        </Tooltip>
      }
    >
        <div className={styles.gameCard} onClick={handleClick} style={{ background, height: card.spriteHeight, width: card.spriteWidth }}>
            { card.energyCost === "-1" && (<span className={styles.cardName}>{card.name}</span>) }
        </div>
    </OverlayTrigger>
    );
};

export default SmallGameCard;