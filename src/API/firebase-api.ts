import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";
import Deck from '../Models/Deck';
import uuid from 'short-uuid';

var firebaseConfig = {
    apiKey: "AIzaSyBwaN3JgqLjChTaCqRS8tfGxVoP7tdHK-g",
    authDomain: "atohead-16204.firebaseapp.com",
    projectId: "atohead-16204",
    storageBucket: "atohead-16204.appspot.com",
    messagingSenderId: "1081891664435",
    appId: "1:1081891664435:web:f51cf0a189d85d6d756946",
    measurementId: "G-2D5DLRH3BY"
};

// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

firebase.analytics();
firebase.firestore();

const storage = firebase.storage();
const storageRef = storage.ref();

const DECK_COLL = 'decks';

export const getDeck = async (id: string): Promise<Deck> => {
    return firebase.firestore().collection(DECK_COLL).doc(id).get()
    .then((response) => {
        return response.data() as Deck;
    }).then((deck) => {
        let needsUpdate = deck.cards.find((card) => !card.uid);
        
        if (needsUpdate) {
            deck.cards = deck.cards.map((card) => {
                
                if (!card.uid) {
                    return {
                        ...card,
                        uid: uuid.generate() as string
                    };
                }
                
                return card;
            });
            
            saveDeck(deck);
        }

        return deck;
    });
};

export const saveDeck = async (deck: Deck): Promise<Deck> => {
    return firebase.firestore().collection(DECK_COLL).doc(deck.id).set(deck)
    .then(() => {
        return Promise.resolve(deck);
    });
};

export const getImage = async (path: string): Promise<string> => {
    const imageRef = storageRef.child(path);
    return imageRef.getDownloadURL()
        .then(url => url)
        .catch(() => ''); // doesn't exist
};

const firebaseAPI = {
    getDeck,
    saveDeck,
    getImage,
};

export default firebaseAPI;