import CharacterType from './CharacterType.enum';
import Trait from './Trait';
import Resistance from './Resistance';
import InnateCard from './InnateCard';
import Sprite from './Sprite';

interface Character {
    id: string;
    name: string;
    job: string;
    characterType: CharacterType;
    traits: Trait[];
    resistances: Resistance[];
    innateCards: InnateCard[];
    weaponSprite: Sprite;
    headshotSprite: Sprite;
    fullBodySprite: Sprite;
}

export default Character;