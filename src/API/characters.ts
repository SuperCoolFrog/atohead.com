import ChampionsDatum from './data/champions.json';
import Character from '../Models/Character';
import Trait from '../Models/Trait';
import Resistance from '../Models/Resistance';
import InnateCard from '../Models/InnateCard';
import Sprite from '../Models/Sprite';
import CharacterType from '../Models/CharacterType.enum';

const CACHE = {} as any;

export const getChampions = (): Promise<Character[]> => {
    if (CACHE.champions) { return Promise.resolve(CACHE.champions); }

    const champions: Character[] = ChampionsDatum.champions.map((data) => {
        const traits = data.traits.map((d) => {
            return new Trait(d.tier, d.traits);
        });
        const resistances = data.resistances.map((r) => (r as Resistance))
        const innateCards = data.innateCards.map((c) => (c as InnateCard))
        const weaponSprite = data.weaponSprite as Sprite;
        const headshotSprite = data.headshotSprite as Sprite;
        const fullBodySprite = data.fullBodySprite as Sprite;
        
        return {
            id: data.id,
            name: data.name,
            job: data.job,
            jobColor: data.jobColor,
            characterType: data.characterType as CharacterType,
            traits,
            resistances,
            innateCards,
            weaponSprite,
            headshotSprite,
            fullBodySprite,
        } as Character;
    });
    
    CACHE.champions = champions;
    
    return Promise.resolve(champions);
};

export const getChampion = async (id: string): Promise<Character> => {
    const champions = await getChampions();
    
    return champions.find((champ) => champ.id === id) as Character;
};