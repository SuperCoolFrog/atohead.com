import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './monsters.module.scss';
import API from '../../API/API';
import Sprite from '../../Components/Sprite/Sprite';
import { Redirect } from 'react-router-dom';
import Monster from '../../Models/Monster';

const Monsters = () => {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [redirectId, setRedirectId] = useState<string|null>(null);
    
    useEffect(() => {
        API.getMonsters().then((monsters) => {
            console.log(monsters);
            setMonsters(monsters);
        });
        
        return () => {
            setRedirectId(null);
        }
    }, []);
    
    if (redirectId) {
        return <Redirect to={`/monster/${redirectId}`} />;
    }

    return (<Container className={styles.container}>
        <Row>
            { monsters.map((m) => (
            <Col md="2" className={styles.spriteCol} key={m.id}>
                <Sprite sprite={m.headshotSprite} onClick={() => (setRedirectId(m.id))} />
                <div className={styles.monsterName} onClick={() => (setRedirectId(m.id))}>{m.name}</div>
            </Col>
            ))}
        </Row>
    </Container>);
};

export default Monsters;