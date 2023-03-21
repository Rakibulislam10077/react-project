// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ5LNK6kiRnlCOBEOJmbbhKq0muvid6nw",
    authDomain: "ema-john-simple-d398c.firebaseapp.com",
    projectId: "ema-john-simple-d398c",
    storageBucket: "ema-john-simple-d398c.appspot.com",
    messagingSenderId: "310232673728",
    appId: "1:310232673728:web:5e313372e01c149f0eac25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;