import GameCard from '../Models/GameCard';
import uuid from 'short-uuid';
import Deck from '../Models/Deck';
import GameCardUpgrade from '../Models/GameCardUpgrade';
import CharacterType from '../Models/CharacterType.enum';
import Upgrade from '../Models/Upgrade.enum';
import fbAPI from './firebase-api';
import upgradeConfig from './upgradesConfig';

/** CARDS */

let cards: GameCard[] = [];
let cardsFetched = false;

export const getCards = (): Promise<GameCard[]> => {
    if (cardsFetched) {
        return Promise.resolve(cards);
    }
    
    return fetch('/game-data/cards.json')
    .then(response => response.json())
    .then(data => { 
      cardsFetched = true;
      cards = data.cards;
      return data.cards as GameCard[];
    });
};

/** DECK */
const deckCache = {} as any;
const updatedDeckIds: string[] = [];

const saveDeckToFirebase = () => {
  if (!updatedDeckIds) { return; }

  updatedDeckIds
  .map((id) => deckCache[id] as Deck)
  .forEach((deck) => {
    if (updatedDeckIds) {
      const idx = updatedDeckIds.findIndex((id) => id === deck.id);
      updatedDeckIds.splice(idx, 1);
    }
    fbAPI.saveDeck(deck);
  })
};

export const saveDeck = (deck: Deck): Promise<Deck> => {
  deckCache[deck.id] = deck;
  
  if (updatedDeckIds.indexOf(deck.id) < 0) {
    updatedDeckIds.push(deck.id);
    setTimeout(() => {
      saveDeckToFirebase();
    }, 1000)
  }

  return Promise.resolve(deck);
}; 

export const getDeck = (id: string): Promise<Deck> => {
    if (deckCache[id]) {
      return Promise.resolve(deckCache[id]);
    }
    
    return fbAPI.getDeck(id);
};

export function createDeck(characterType: CharacterType): Promise<Deck> {
  const nuDeck  = {
    id: uuid.generate() as string,
    characterType,
    cards: [],
  } as Deck;
  
  deckCache[nuDeck.id] = nuDeck;

  if (updatedDeckIds.indexOf(nuDeck.id) < 0) {
    updatedDeckIds.push(nuDeck.id);
    setTimeout(() => {
      saveDeckToFirebase();
    }, 1000)
  }
  
  return Promise.resolve(nuDeck);
};

/** Images */
const imageCache = {} as any;
const upgradesCache = {} as any;

export const getUpgrades = (characterType: CharacterType): Promise<GameCardUpgrade[]> => {
    if (upgradesCache[characterType]) {
        return Promise.resolve(upgradesCache[characterType]);
    }
    
    return fetch(`/game-data/upgrades_${characterType.toLowerCase()}.json`)
    .then(response => response.json())
    .then(data => { 
      const upgrades = data.upgrades;
      upgradesCache[characterType] = upgrades;
      return upgrades as GameCardUpgrade[];
    });
};

export const getImage = (path: string): Promise<string> => {
  if (imageCache[path]) {
    Promise.resolve(imageCache[path]);
  }
  return fbAPI.getImage(path)
  .then((url) => {
    imageCache[path] = url;
    return url;
  });
};

export const getUpgradeImage = (characterType: CharacterType, upgrade: Upgrade) => {
  const imagePath = `${upgradeConfig.path}/${characterType}_${upgrade}.${upgradeConfig.imageType}`;
  
  return getImage(imagePath);
};

const API =  { getCards, getDeck, saveDeck, getImage };
export default API;