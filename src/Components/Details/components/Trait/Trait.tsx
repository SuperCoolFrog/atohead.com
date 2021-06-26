import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { TraitDescription }from '../../../../Models/Trait';
import styles from './trait.module.scss';

interface TraitProps {
    description: TraitDescription;
}

const Trait = ({ description }: TraitProps) => {

    return (<OverlayTrigger
      placement="right"
      overlay={(props) => (
        <Tooltip id="trait-tooltip" className={styles.cardToolTip} {...props}>
          {description.description}
        </Tooltip>
      )}
    >
        <span className={styles.title}>{description.title}</span>
    </OverlayTrigger>
    );
};

export default Trait;