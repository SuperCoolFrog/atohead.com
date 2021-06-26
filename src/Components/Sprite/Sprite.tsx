import React from 'react';
import styles from './sprite.module.scss';
import classNames from 'classnames';
import SpriteModel from '../../Models/Sprite';

interface SpriteProps {
    sprite: SpriteModel;
    scaleToWidth?: number;
    scaleToHeight?: number;
    onClick?: (card:SpriteModel) => void;
}

const Sprite = ({ sprite, onClick, scaleToHeight, scaleToWidth }: SpriteProps) => {
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
    
    return (<>
        <div
            className={styles.spriteContainer}
            style={{ width: containerWidth, height: containerHeight, background: 'url(/images/placeholder_card.png)'}}
        >
            <div className={classNames(styles.sprite, { [styles.clickable]: !!onClick })}
                onClick={handleClick}
                style={{ background, height: sprite.spriteHeight, width: sprite.spriteWidth, transform }}
            >
            </div>
        </div>
    </>);
};

export default Sprite;