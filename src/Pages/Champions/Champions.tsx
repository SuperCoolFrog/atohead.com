import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './champions.module.scss';
import Character from '../../Models/Character';
import API from '../../API/API';
import Sprite from '../../Components/Sprite/Sprite';
import { Redirect } from 'react-router-dom';

const Champions = () => {
    const [champions, setChampions] = useState<Character[]>([]);
    const [redirectId, setRedirectId] = useState<string|null>(null);
    
    useEffect(() => {
        API.getChampions().then((champions) => {
            setChampions(champions);
        });
        
        return () => {
            setRedirectId(null);
        }
    }, []);
    
    if (redirectId) {
        return <Redirect to={`/champion/${redirectId}`} />;
    }


    return (<Container className={styles.container}>
        <Row>
            { champions.map((champ) => (
            <Col md="2" className={styles.spriteCol}>
                <Sprite sprite={champ.headshotSprite} onClick={() => (setRedirectId(champ.id))} />
            </Col>
            ))}
        </Row>
    </Container>);
};

export default Champions;