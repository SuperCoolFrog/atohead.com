import GameCard from '../Models/GameCard';
import uuid from 'short-uuid';
import Deck from '../Models/Deck';
import CharacterType from '../Models/CharacterType.enum';
import fbAPI from './firebase-api';

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

const API =  { getCards, getDeck, saveDeck };
export default API;