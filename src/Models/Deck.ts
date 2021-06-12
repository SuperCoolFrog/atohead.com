import CharacterType from './CharacterType.enum';
import GameCard from './GameCard';

interface Deck {
    id: string;
    characterType: CharacterType;
    cards: GameCard[];
}

export default Deck;