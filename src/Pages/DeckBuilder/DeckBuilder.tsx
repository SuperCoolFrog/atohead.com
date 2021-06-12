import React from 'react';
import DeckBuilderTool from '../../Components/DeckBuilderTool/DeckBuilderTool';
import CharacterType from '../../Models/CharacterType.enum';

const DeckBuilder = () => {
    return (<DeckBuilderTool characterType={CharacterType.WARRIOR} />)
};

export default DeckBuilder;