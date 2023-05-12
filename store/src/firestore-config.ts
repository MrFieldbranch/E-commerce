// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAatHPEwBqlBlm63cB68QieCffViR7HIjk",
    authDomain: "fancy-fashion-7f45f.firebaseapp.com",
    projectId: "fancy-fashion-7f45f",
    storageBucket: "fancy-fashion-7f45f.appspot.com",
    messagingSenderId: "386427676298",
    appId: "1:386427676298:web:ba81b43e0fef78f3802f73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);



