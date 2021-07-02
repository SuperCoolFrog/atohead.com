import React from 'react';
import classNames from 'classnames';
import { Col, Container, Row } from 'react-bootstrap';
import ScaledGameCard from '../ScaledGameCard/ScaledGameCard';
import styles from './details.module.scss';
import Character from '../../Models/Character';
import Sprite from '../Sprite/Sprite';
import Trait from './components/Trait/Trait';

interface DetailsProps {
    character: Character;
}


const Details = ({ character }: DetailsProps) => {

    const hasInitialCardsAndWeapon = character.innateCards && character.weaponSprite;

    return (<Container className={styles.container}>
        <h2>{character.name}</h2>
        <h3 style={{color: character.jobColor }}>{character.job} <small className={styles.characterType}>{character.characterType}</small></h3>
        <Container>
            <Row>
                <Col md="6">
                    <h4 className={styles.detailsHeader}>Resistances</h4>
                    <hr />
                    <Container>
                        <Row>
                        { character.resistances.map((r, i) => (
                            <Col sm="5" key={`${r.resistanceType}`}>
                                <label className={styles.label}>{r.resistanceType}</label>
                                <span className={styles.detail}>{r.value}</span>
                            </Col>
                        ))}
                        </Row>       
                    </Container>

                    {character.traits && character.traits.length && (<>
                        <h4 className={styles.detailsHeader}>Traits</h4>
                        <hr />
                        <Container>
                            { character.traits.map((t, i) => (
                            <Row key={`row-trait-${i}`}>
                                <Col sm="3">
                                    <label className={styles.label}>{t.tier}</label>
                                </Col>
                                { t.descriptions.map((descr, i) => (
                                    <Col className={styles.traitDetail} key={`trait-col-${i}`}>
                                        <span className={classNames(styles.detail)}>
                                            <Trait description={descr} />
                                        </span>
                                    </Col>
                                ))}
                            </Row>))}
                        </Container>
                    </>)}

                </Col>
                <Col md="6">
                    <div className={styles.imageContainer}>
                        <Sprite sprite={character.fullBodySprite} transparentBackground sharpCorners />
                    </div>
                </Col>
            </Row>
            { hasInitialCardsAndWeapon && (
                <Row>
                    <Col sm={8}>
                        <h4 className={styles.detailsHeader}>Initial Cards</h4>
                        <hr />
                        <div className={styles.initialCardsRow}>
                            {character.innateCards.map((card) => (<div key={`init-card-${card.serialNumber}`} className={styles.initialCardContainer}>
                                <ScaledGameCard
                                    card={card}
                                    includeUpgrades={false}
                                    scaleToHeight={parseInt(card.spriteHeight) / 1.5}
                                    scaleToWidth={parseInt(card.spriteWidth) / 1.5}
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
                            <Sprite
                                sprite={character.weaponSprite}
                                scaleToHeight={parseInt(character.weaponSprite.spriteHeight) / 1.5}
                                scaleToWidth={parseInt(character.weaponSprite.spriteWidth) / 1.5}
                            />
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    </Container>)
};

export default Details;