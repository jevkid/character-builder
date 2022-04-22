// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKoqe55nkxNbzUKM2MO4WK5_RKRGWvKe4",
  authDomain: "dnd-character-builder-76077.firebaseapp.com",
  projectId: "dnd-character-builder-76077",
  storageBucket: "dnd-character-builder-76077.appspot.com",
  messagingSenderId: "204366571348",
  appId: "1:204366571348:web:e1ca63c24f9907768c0ac1",
  measurementId: "G-309T0QF20D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);