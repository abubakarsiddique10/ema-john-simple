// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV8vUdxwFNauP5rf8FEHAuBGEFHGN0M6Y",
    authDomain: "ema-john-simple-50110.firebaseapp.com",
    projectId: "ema-john-simple-50110",
    storageBucket: "ema-john-simple-50110.appspot.com",
    messagingSenderId: "110941997711",
    appId: "1:110941997711:web:c552258fb2142cf4b13efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;