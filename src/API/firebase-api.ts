import firebase from "firebase/app";
import "firebase/analytics";
import Deck from '../Models/Deck';

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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const getDeck = async (id: string): Promise<Deck> => {
    return Promise.resolve({} as Deck);
};

export const saveDeck = async (deck: Deck): Promise<Deck> => {
    console.log(new Date());
    return Promise.resolve(deck);
};

const firebaseAPI = {
    getDeck,
    saveDeck,
};

export default firebaseAPI;