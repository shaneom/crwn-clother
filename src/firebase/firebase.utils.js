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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
