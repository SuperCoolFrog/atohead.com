import Monster from '../Models/Monster';
import Resistance from '../Models/Resistance';
import Sprite from '../Models/Sprite';
import preprocess from './mixin-preprocessor';

const CACHE = {} as any;

const getMonstersJSON = (): Promise<any> => {
    return fetch('/game-data/monsters.json')
    .then(response => response.json());
};

export const getMonsters = async (): Promise<Monster[]> => {
    if (CACHE.monsters) { return Promise.resolve(CACHE.monsters); }
    
    const monstersDatum = await getMonstersJSON();
    
    const processed = preprocess(monstersDatum);
    
    const monsters: Monster[] = processed.monsters.map((data: any) => {
        const resistances = data.resistances.map((r: any) => (r as Resistance))
        const headshotSprite = data.headshotSprite as Sprite;
        
        headshotSprite.spriteTop = -(parseInt(headshotSprite.spriteWidth) * (Math.floor(headshotSprite.spriteSheetIndex / 10))) + 'px';
        headshotSprite.spriteLeft = -(parseInt(headshotSprite.spriteWidth) * (headshotSprite.spriteSheetIndex % 10)) + 'px';
        
        return {
            id: data.id,
            name: data.name,
            resistances,
            headshotSprite,
        } as Monster;
    });
    
    CACHE.monsters = monsters.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    
    return Promise.resolve(CACHE.monsters);
};

export const getMonster = async (id: string): Promise<Monster> => {
    const monsters = await getMonsters();
    
    return monsters.find((m) => m.id === id) as Monster;
};