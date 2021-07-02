import React, { useEffect, useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import styles from './monster-details.module.scss';
import Details from '../../Components/Details/Details';
import {
    Link,
    useParams
} from "react-router-dom";
import API from '../../API/API';
import Monster from '../../Models/Monster';


 interface MonsterDetailsParams {
     id: string;
 }

const MonsterDetails = () => {
    const [monster, setMonster] = useState<Monster|null>(null);
    const { id } = useParams() as MonsterDetailsParams;
    
    useEffect(() => {
        API.getMonster(id).then((_character) => {
            setMonster(_character);
        });
    }, [])

    return (<>
        <Container className={styles.container}>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/monsters" }}>Monsters</Breadcrumb.Item>
                    <Breadcrumb.Item active>{monster?.name || ''}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            {monster && (
                <Details character={monster} />
            )}
        </Container>
    </>);
};

export default MonsterDetails;