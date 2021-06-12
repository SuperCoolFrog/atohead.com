import GameCard from '../Models/GameCard';
import uuid from 'short-uuid';
import Deck from '../Models/Deck';
import CharacterType from '../Models/CharacterType.enum';

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
      return data.cards as GameCard[];
    });
};

/** DECK */
const db = {} as any;

export const saveDeck = (deck: Deck): Promise<Deck> => {
  db[deck.id] = deck;
  
  return Promise.resolve(deck);
}; 

export const getDeck = (id: string): Promise<Deck> => {
    return Promise.resolve(db[id]);
};

export const createDeck = (characterType: CharacterType): Promise<Deck> => {
  const nuDeck  = {
    id: uuid.generate() as string,
    characterType,
  } as Deck;
  
  db[nuDeck.id] = nuDeck;
  
  return Promise.resolve(nuDeck);
};

const API =  { getCards, getDeck, saveDeck };
export default API;