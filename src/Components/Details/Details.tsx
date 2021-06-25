import classNames from 'classnames';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './details.module.scss';

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
                        { resistances.map(({name, value}) => (<>
                            <Col sm="5">
                                <label className={styles.label}>{name}</label>
                                <span className={styles.detail}>{value}</span>
                            </Col>
                        </>))}
                        </Row>       
                    </Container>

                    <h4 className={styles.detailsHeader}>Traits</h4>
                    <hr />
                    <Container>
                        { traits.map(({name, value}) => (<>
                        <Row>
                            <Col sm="3">
                                <label className={styles.label}>{name}</label>
                            </Col>
                            { value.map((_value) => (
                                <Col className={styles.traitDetail}><span className={classNames(styles.detail)}>{_value}</span></Col>
                            ))}
                        </Row>       
                        </>))}
                    </Container>
                </Col>
                <Col md="6">
                    <div className={styles.imageContainer}>
                        <img src='/images/placeholder_card.png'></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>)
};

export default Details;