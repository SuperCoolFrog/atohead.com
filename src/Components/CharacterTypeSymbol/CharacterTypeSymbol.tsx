import React from 'react';
import classNames from 'classnames';
import styles from './character-type-symbol.module.scss';
import CharacterType from '../../Models/CharacterType.enum';

interface CharacterTypeSymbolProps {
    characterType: CharacterType;
}

const map = {
    [CharacterType.WARRIOR]: { left: '-1545px', top: '-402px', title: 'Warrior'},
    [CharacterType.SCOUT]: { left: '-1385px', top: '-402px', title: 'Scout'},
    [CharacterType.MAGE]: { left: '-1225px', top: '-402px', title: 'Mage'},
    [CharacterType.HEALER]: { left: '-1065px', top: '-402px', title: 'Healer'},
};

const CharacterTypeSymbol = ({ characterType }: CharacterTypeSymbolProps) => {
    const url = '/images/characters.png';
    const left = map[characterType].left;
    const top = map[characterType].top;
    const background = `url(${url}) ${left} ${top}`;
    
    const title = map[characterType].title;

    return (<div className={styles.container} title={title}>
        <div
            className={classNames(styles.imageContainer, styles.warrior)}
            style={{ background }}
        >
        </div>
    </div>);
};

export default CharacterTypeSymbol;