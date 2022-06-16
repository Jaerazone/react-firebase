import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    //apiKey: process.env.REACT_APP_FIREBASE_KEY,
    apiKey: "AIzaSyDDzS8J2xmhrHcKCG9SlTVA8M3c_LvXzzc",
    authDomain: "tutorial-231a9.firebaseapp.com",
    projectId: "tutorial-231a9",
    storageBucket: "tutorial-231a9.appspot.com",
    messagingSenderId: "220649076464",
    appId: "1:220649076464:web:a4736a5125d449b9e43435",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
