import React, { useEffect, useState } from 'react';
import DeckBuilderTool from '../../Components/DeckBuilderTool/DeckBuilderTool';
import CharacterType from '../../Models/CharacterType.enum';
import { Redirect, useParams, useLocation } from "react-router-dom";
import { getDeck } from '../../API/API';

interface DeckBuilderRouteParams {
    characterType: string;
    id: string;
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const DeckBuilder = () => {
    const [redirectId, setRedirectId] = useState('');
    const { characterType } = useParams() as DeckBuilderRouteParams; 
    const query = useQuery(); 
    
    const id = query.get('id');
    
    useEffect(() => {
        if (!id) {
            getDeck().then((deck) => {
                setRedirectId(deck.id);
            });
        } else {
            setRedirectId('');
        }
    }, [id]);
    
    if (redirectId) {
        return <Redirect to={`/deck-builder/${characterType}?id=${redirectId}`} />;
    }
    
    if (!(id && characterType)) {
        return null;
    }
    
    const enumCharacterType = characterType.toUpperCase() as CharacterType;
    
    return (<DeckBuilderTool characterType={enumCharacterType} />)
};

export default DeckBuilder;