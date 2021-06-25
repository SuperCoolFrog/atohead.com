import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './champions.module.scss';
import Details from '../../Components/Details/Details';

const Champions = () => {
    return (<Container className={styles.container}>
        <Details/>
    </Container>);
};

export default Champions;