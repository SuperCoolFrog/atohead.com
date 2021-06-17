import CharacterType from './CharacterType.enum';
import DeckGameCard from './DeckGameCard';

interface Deck {
    id: string;
    characterType: CharacterType;
    cards: DeckGameCard[];
}

export default Deck;