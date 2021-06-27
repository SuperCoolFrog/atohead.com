import ChampionsDatum from './data/champions.json';
import Character from '../Models/Character';
import Trait from '../Models/Trait';
import Resistance from '../Models/Resistance';
import InnateCard from '../Models/InnateCard';
import Sprite from '../Models/Sprite';
import CharacterType from '../Models/CharacterType.enum';
import preprocess from './mixin-preprocessor';

const CACHE = {} as any;

export const getChampions = (): Promise<Character[]> => {
    if (CACHE.champions) { return Promise.resolve(CACHE.champions); }
    
    const processed = preprocess(ChampionsDatum);
    
    const champions: Character[] = processed.champions.map((data: any) => {
        const traits = data.traits.map((d: any) => {
            return new Trait(d.tier, d.traits);
        });
        const resistances = data.resistances.map((r: any) => (r as Resistance))
        const innateCards = data.innateCards.map((c: any) => (c as InnateCard))
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