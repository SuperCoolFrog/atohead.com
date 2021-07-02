import React from 'react';
import styles from './sprite.module.scss';
import classNames from 'classnames';
import SpriteModel from '../../Models/Sprite';

interface SpriteProps {
    sprite: SpriteModel;
    scaleToWidth?: number;
    scaleToHeight?: number;
    onClick?: (card:SpriteModel) => void;
    transparentBackground?: boolean;
    sharpCorners?: boolean;
}

const Sprite = ({ sprite, onClick, scaleToHeight, scaleToWidth, sharpCorners, transparentBackground }: SpriteProps) => {
    const background = `url(${sprite.image}) ${sprite.spriteLeft} ${sprite.spriteTop}`
    
    let scaledWidth = parseInt(sprite.spriteWidth);
    let scaledHeight = parseInt(sprite.spriteHeight);
    let transform: string = 'scale(1, 1)';
    
    if (scaleToWidth && scaleToHeight) {
        scaledWidth = scaleToWidth / scaledWidth;
        scaledHeight = scaleToHeight / scaledHeight;
        transform = `scale(${scaledWidth}, ${scaledHeight})`;
    }
    
    const handleClick = () => {
        if (onClick) {
            onClick(sprite);
        }
    };
    
    const containerWidth = scaleToWidth ? scaleToWidth + 'px' : sprite.spriteWidth;
    const containerHeight = scaleToHeight ? scaleToHeight + 'px' : sprite.spriteHeight;
    
    const containerBackground = transparentBackground ? 'transparent' : 'url(/images/placeholder_card.png)'; 
    
    return (<>
        <div
            className={classNames(styles.spriteContainer, { [styles.rounded]: !sharpCorners })}
            style={{ width: containerWidth, height: containerHeight, background: containerBackground }}
        >
            <div className={classNames(styles.sprite, { [styles.clickable]: !!onClick, [styles.rounded]: !sharpCorners })}
                onClick={handleClick}
                style={{ background, height: sprite.spriteHeight, width: sprite.spriteWidth, transform }}
            >
            </div>
        </div>
    </>);
};

export default Sprite;