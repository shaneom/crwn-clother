import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyD-EVCk9siGSxdKnndyL4eV-U5bMCFNlVs',
    authDomain: 'shaneom-crwn-db.firebaseapp.com',
    databaseURL: 'https://shaneom-crwn-db.firebaseio.com',
    projectId: 'shaneom-crwn-db',
    storageBucket: 'shaneom-crwn-db.appspot.com',
    messagingSenderId: '821451851157',
    appId: '1:821451851157:web:65f69b0416d780e3a9a29c',
    measurementId: 'G-LG1GBR66QB',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
