// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMhzY-R0gOjHRgiSjoQa_r0fAa7-_CDkw",
  authDomain: "pantry-tracker-58778.firebaseapp.com",
  projectId: "pantry-tracker-58778",
  storageBucket: "pantry-tracker-58778.appspot.com",
  messagingSenderId: "1036455018294",
  appId: "1:1036455018294:web:96e96f42a41cc8e0ecfd97",
  measurementId: "G-TCZSSSFCN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}