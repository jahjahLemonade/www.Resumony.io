import {initializeApp} from 'firebase/app'
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteField} from 'firebase/firestore'
import env from 'react-dotenv'


const config = {
    apiKey: 'AIzaSyBw2Cd4sjdn87Fsb-ta42A4WP1be0qkDwM',//env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'resumony.firebaseapp.com',//env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: env.REACT_APP_DB_URL,
    projectId: "resumony",
    storageBucket: "resumony.appspot.com",
    messagingSenderId: "515722153612",
    appId: "1:515722153612:web:3fc00ff43fd52e1bb4b5a9",
    measurementId: "G-7XDDEQ48V6"
};

const fb = initializeApp(config)
const auth = getAuth(fb)
const db = getFirestore(fb)

export {
    signOut, 
    auth, 
    db, 
    getDocs,
    collection, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    doc,
    addDoc,
    updateDoc,
    deleteField
}