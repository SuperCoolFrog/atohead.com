import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './champions.module.scss';
import Character from '../../Models/Character';
import API from '../../API/API';
import Sprite from '../../Components/Sprite/Sprite';

const Champions = () => {
    const [champions, setChampions] = useState<Character[]>([]);
    
    useEffect(() => {
        API.getChampions().then((champions) => {
            setChampions(champions);
        });
    }, []);


    return (<Container className={styles.container}>
        <Row>
            { champions.map((champ) => (
            <Col>
                <Sprite sprite={champ.headshotSprite} onClick={() => (alert('Hello'))} />
            </Col>
            ))}
        </Row>
    </Container>);
};

export default Champions;