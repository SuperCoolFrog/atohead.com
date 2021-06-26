import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './champion-details.module.scss';
import Details from '../../Components/Details/Details';

const ChampionDetails = () => {
    return (<Container className={styles.container}>
        <Details/>
    </Container>);
};

export default ChampionDetails;