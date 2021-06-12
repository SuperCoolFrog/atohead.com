import React, { useEffect, useState } from 'react';
import { default as GameCardModel } from '../../Models/GameCard';
import GameCard from '../GameCard/GameCard';
import { getCards } from '../../API/API';
import CharacterType from '../../Models/CharacterType.enum';

interface DeckBuilderToolProps {
    characterType: CharacterType;
}

const DeckBuilderTool = (props: DeckBuilderToolProps) => {
    const [cards, setCards] = useState<GameCardModel[]>([]);
  
    useEffect(() => {
        getCards().then((cards) => {
            setCards(cards);
        });
    }, []);

    return (<>
        {cards.map((card) => (<GameCard card={card} />))}
    </>);
};

export default DeckBuilderTool;