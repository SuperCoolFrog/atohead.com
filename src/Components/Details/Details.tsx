import React from 'react';
import classNames from 'classnames';
import { Col, Container, Row } from 'react-bootstrap';
import GameCardModel from '../../Models/GameCard';
import ScaledGameCard from '../ScaledGameCard/ScaledGameCard';
import styles from './details.module.scss';

interface InitialGameCard extends GameCardModel {
    count: number;
}

const Details = () => {
    
    const resistances = [
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
        { name: 'Slash', value: '17%' },
    ];
    
    const traits = [
        { name: 'Innate', value: ['Well Trained'] },
        { name: 'Level 2', value: ['Quick', 'Sturdy'] },
        { name: 'Level 3', value: ['Offense Mastery', 'Defense Mastery'] },
        { name: 'Level 4', value: ['Hardened', 'Athletic'] },
        { name: 'Level 5', value: ['Weapon Expert', 'Tireless'] },
    ];
    
    const initialCards: InitialGameCard[] = [
        { count: 4, "characterType": "WARRIOR", "serialNumber": "32", "name": "Fast Strike", "type": "Melee Attack", "energyCost": "1", "image": "/images/warrior_cards_page_2.png", "spriteLeft": "-1230px", "spriteTop": "-440px", "spriteWidth": "160px", "spriteHeight": "235px" },
        { count: 4, "characterType": "WARRIOR", "serialNumber": "25", "name": "Defend", "type": "Defense", "energyCost": "1", "image": "/images/warrior_cards_page_2.png", "spriteLeft": "-346px", "spriteTop": "-720px", "spriteWidth": "160px", "spriteHeight": "235px" },
        { count: 2, "characterType": "WARRIOR", "serialNumber": "46", "name": "Intercept", "type": "Defense", "energyCost": "0", "image": "/images/warrior_cards_page_3.png", "spriteLeft": "-1029px", "spriteTop": "-160px", "spriteWidth": "160px", "spriteHeight": "235px" },
        { count: 2, "characterType": "WARRIOR", "serialNumber": "64", "name": "Rend", "type": "Melee Attack", "energyCost": "2", "image": "/images/warrior_cards_page_4.png", "spriteLeft": "-1029px", "spriteTop": "-160px", "spriteWidth": "160px", "spriteHeight": "235px" },
        { count: 1, "characterType": "WARRIOR", "serialNumber": "3", "name": "Barricade", "type": "Defense", "energyCost": "2", "image": "/images/warrior_cards_page_1.png", "spriteLeft": "-748px", "spriteTop": "-160px", "spriteWidth": "160px", "spriteHeight": "235px" },
        { count: 1, "characterType": "WARRIOR", "serialNumber": "29", "name": "Enrage", "type": "Skill", "energyCost": "1", "image": "/images/warrior_cards_page_2.png", "spriteLeft": "-1230px", "spriteTop": "-160px", "spriteWidth": "160px", "spriteHeight": "235px" },
        { count: 1, "characterType": "WARRIOR", "serialNumber": "54", "name": "Piercing Howl", "type": "Skill", "energyCost": "1", "image": "/images/warrior_cards_page_3.png", "spriteLeft": "-1431px", "spriteTop": "-720px", "spriteWidth": "160px", "spriteHeight": "235px" },
    ];

    return (<Container className={styles.container}>
        <h2>Magnus</h2>
        <h3 style={{color: 'red'}}>Mercenary <small className={styles.characterType}>Warrior</small></h3>
        <Container>
            <Row>
                <Col md="6">
                    <h4 className={styles.detailsHeader}>Resistances</h4>
                    <hr />
                    <Container>
                        <Row>
                        { resistances.map(({name, value}, i) => (
                            <Col sm="5" key={`${name}-${value}-${i}`}>
                                <label className={styles.label}>{name}</label>
                                <span className={styles.detail}>{value}</span>
                            </Col>
                        ))}
                        </Row>       
                    </Container>

                    <h4 className={styles.detailsHeader}>Traits</h4>
                    <hr />
                    <Container>
                        { traits.map(({name, value}, i) => (
                        <Row key={`row-${name}-${value}-${i}`}>
                            <Col sm="3">
                                <label className={styles.label}>{name}</label>
                            </Col>
                            { value.map((_value, i) => (
                                <Col className={styles.traitDetail} key={`trait-col-${name}-${_value}-${i}`}>
                                    <span className={classNames(styles.detail)}>{_value}</span>
                                </Col>
                            ))}
                        </Row>))}
                    </Container>

                </Col>
                <Col md="6">
                    <div className={styles.imageContainer}>
                        <img src='/images/placeholder_card.png'></img>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <h4 className={styles.detailsHeader}>Initial Cards</h4>
                    <hr />
                    <div className={styles.initialCardsRow}>
                        {initialCards.map((card) => (<div key={`init-card-${card.name}-${card.serialNumber}`} className={styles.initialCardContainer}>
                            <ScaledGameCard
                                card={card}
                                includeUpgrades={false}
                                scaleToHeight={parseInt(card.spriteHeight) / 2}
                                scaleToWidth={parseInt(card.spriteWidth) / 2}
                            />
                            <div className={styles.countContainer}>
                                <span className={styles.countNumber}>{card.count}</span>
                            </div>
                        </div>))}
                    </div>
                </Col>
                <Col sm={4}>
                    <h4 className={styles.detailsHeader}>Weapon</h4>
                    <hr />
                    <div className={styles.weaponCardImageContainer}>
                        <img src='/images/placeholder_card.png'></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>)
};

export default Details;