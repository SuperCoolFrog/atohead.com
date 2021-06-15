import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getCards } from '../../API/API';
import GameCard from '../../Components/SmallGameCard/SmallGameCard';
import { default as GameCardModel } from '../../Models/GameCard';
import CharacterType from '../../Models/CharacterType.enum';
import styles from './collection.module.scss';

const Collection = () => {
    const [cards, setCards] = useState<GameCardModel[]>([]);
    const [filteredCards, setFilteredCards] = useState<GameCardModel[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getCards().then((cards) => {
            setCards(cards);
            setFilteredCards(cards);
        });
    }, []);

    // useEffect(() => {
    //     function setFirstClass(){
    //         let children = containerRef?.current?.children;
    //         let firstChild = containerRef?.current?.firstElementChild;
    //         let leftPosition: number = -1;

    //         if (!(firstChild && children)) {
    //             return;
    //         }
            
    //         leftPosition = (firstChild as HTMLDivElement).offsetLeft;

    //         Object.keys(children)
    //             .map(k => parseInt(k))
    //             .forEach(k => {
    //                 let ele = (containerRef?.current?.children[k] as HTMLDivElement);
    //                 if (ele) {
    //                     if (ele.offsetLeft <= leftPosition){
    //                         ele.classList.add('firstColumn');
    //                     } else {
    //                         ele.classList.remove('firstColumn');
    //                     }
    //                 }
    //             });
    //     }
    //     window.addEventListener('resize', setFirstClass);
    //     setFirstClass();
    // }, []);
    
    return (<Container>
        <h2>Warrior</h2>
        <div id="collectionCardContainer" className={styles.collectionRow} ref={containerRef}>
            {filteredCards.filter(c => c.characterType === CharacterType.WARRIOR).map((card) => (
                // <div className={styles.cardContainer} key={card.characterType + card.serialNumber}>
                    <GameCard card={card} key={card.characterType + card.serialNumber} />
                // </div>
            ))}
        </div>
        {/* <Row>
            {filteredCards.filter(c => c.characterType === CharacterType.WARRIOR).map((card) => (
                <Col className={styles.cardContainer} key={card.characterType + card.serialNumber}>
                    <GameCard card={card} />
                </Col>
            ))}
        </Row> */}
    </Container>);
    
};

export default Collection;