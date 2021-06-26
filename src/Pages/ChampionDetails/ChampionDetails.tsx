import React, { useEffect, useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import styles from './champion-details.module.scss';
import Details from '../../Components/Details/Details';
import {
    Link,
    useParams
} from "react-router-dom";
import API from '../../API/API';
import Character from '../../Models/Character';


 interface ChampionDetailsParams {
     id: string;
 }

const ChampionDetails = () => {
    const [character, setCharacter] = useState<Character|null>(null);
    const { id } = useParams() as ChampionDetailsParams;
    
    useEffect(() => {
        API.getChampion(id).then((_character) => {
            setCharacter(_character);
        });
    }, [])

    return (<>
        <Container className={styles.container}>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/champions" }}>Champions</Breadcrumb.Item>
                    <Breadcrumb.Item active>{character?.name || ''}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            {character && (
                <Details character={character} />
            )}
        </Container>
    </>);
};

export default ChampionDetails;