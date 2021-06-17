import React, { MouseEventHandler, useEffect, useState } from 'react';
import { default as GameCardModel } from '../../Models/GameCard';
import styles from './scaled-game-card.module.scss';
import API from '../../API/API';
import { Overlay, Popover, Tooltip } from 'react-bootstrap';
import { useRef } from 'react';
import SmallGameCard from '../SmallGameCard/SmallGameCard';
import classNames from 'classnames';

interface ScaledGameCardProps {
    card: GameCardModel;
    scaleToWidth?: number;
    scaleToHeight?: number;
    onClick?: (card:GameCardModel) => void;
    includeUpgrades: boolean;
}

const ScaledGameCard = ({ card, onClick, scaleToHeight, scaleToWidth, includeUpgrades }: ScaledGameCardProps) => {
    const [showUpgrades, setShowUpgrades] = useState(false);
    const [upgrades, setUpgrades] = useState<GameCardModel[]>([]);
    const target = useRef(null);
    const background = `url(${card.image}) ${card.spriteLeft} ${card.spriteTop}`
    
    let scaledWidth = parseInt(card.spriteWidth);
    let scaledHeight = parseInt(card.spriteHeight);
    let transform: string = 'scale(1, 1)';
    
    if (scaleToWidth && scaleToHeight) {
        scaledWidth = scaleToWidth / scaledWidth;
        scaledHeight = scaleToHeight / scaledHeight;
        transform = `scale(${scaledWidth}, ${scaledHeight})`;
    }
    
    useEffect(() => {
        if (!upgrades.length) {
            API.getCardUpgrades(card).then((upgrades) => {
                setUpgrades(upgrades);
            })
        }
    }, []);
    
    const handleClick = () => {
        if (onClick) {
            onClick(card);
        }
    };
    
    const handleRightClick = (ev: React.MouseEvent) => {
        if (!includeUpgrades) return;
        if (upgrades.length) {
            setShowUpgrades(true);
        }
        ev.preventDefault();
    };
    
    const onCloseClick = () => {
        setShowUpgrades(false);
    };
    
    const handleUpgradeClick = (upgradeCard: GameCardModel) => {
        if (onClick) {
            onClick(upgradeCard);
        }
    };
    
    const containerWidth = scaleToWidth ? scaleToWidth + 'px' : card.spriteWidth;
    const containerHeight = scaleToHeight ? scaleToHeight + 'px' : card.spriteHeight;
    
    return (<>
        <div
            className={styles.gameCardContainer}
            style={{ width: containerWidth, height: containerHeight, background: 'url(/images/placeholder_card.png)'}}
        >
            <div ref={target} className={styles.gameCard}
                onClick={handleClick}
                style={{ background, height: card.spriteHeight, width: card.spriteWidth, transform }}
                onContextMenu={handleRightClick}
            >
                { card.energyCost === "-1" && (<span className={styles.cardName}>{card.name}</span>) }
            </div>
        </div>
        <Overlay target={target} show={showUpgrades} placement="left"
            container={target.current}
        >
            <Popover id={`popover-positioned-right`} className={styles.dark}>
                <Popover.Title as="h3" className={classNames(styles.closeButtonContainer, styles.dark)}>
                       <button type="button" className={classNames(styles.closeUpgradesButton, styles.dark)} onClick={onCloseClick}>X</button> 
                </Popover.Title>
                <Popover.Content className={styles.upgradeCardsContainer}>
                    {upgrades.map((upgrade, i) => (
                        <div style={{
                            height: Math.floor(parseInt(upgrade.spriteHeight) / 2) + 'px',
                            width: Math.floor(parseInt(upgrade.spriteWidth) / 2) + 'px',
                            overflow: 'hidden',
                            marginBottom: '16px',
                        }} key={'upgrade-' + upgrade.characterType + '_' + upgrade.serialNumber + '_' + i }>
                            <SmallGameCard card={upgrade} onClick={handleUpgradeClick} />
                        </div>
                    ))}
                </Popover.Content>
            </Popover>
      </Overlay>
    </>);
};

export default ScaledGameCard;