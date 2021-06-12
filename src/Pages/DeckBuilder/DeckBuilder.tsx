import React, { useEffect, useState } from 'react';
import DeckBuilderTool from '../../Components/DeckBuilderTool/DeckBuilderTool';
import CharacterType from '../../Models/CharacterType.enum';
import { Redirect, useParams, useLocation } from "react-router-dom";
import { createDeck, getDeck } from '../../API/API';
import Deck from '../../Models/Deck';

interface DeckBuilderRouteParams {
    characterType: string;
    id: string;
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const DeckBuilder = () => {
    const [redirectId, setRedirectId] = useState('');
    const [deck, setDeck] = useState<Deck|null>(null);
    const { characterType } = useParams() as DeckBuilderRouteParams; 
    const query = useQuery(); 
    
    const id = query.get('id');
    const enumCharacterType = characterType.toUpperCase() as CharacterType;
    
    useEffect(() => {
        if (!id) {
            createDeck(enumCharacterType).then((deck) => {
                setRedirectId(deck.id);
            });
        } else {
            setRedirectId('');
            getDeck(id).then((_deck) => {
                if (!_deck) {
                    return createDeck(enumCharacterType).then((deck) => {
                        setRedirectId(deck.id);
                    });
                } else {
                    setDeck(_deck);
                }
            })
        }
    }, [id]);
    
    if (redirectId) {
        return <Redirect to={`/deck-builder/${characterType}?id=${redirectId}`} />;
    }
    
    if (!(deck)) {
        return null;
    }
    
    return (<DeckBuilderTool deck={deck} />)
};

export default DeckBuilder;