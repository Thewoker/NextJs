// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3RWlhWMkB0VQWdEoV_4LPbJaqTAdJ8hM",
  authDomain: "elias-academy-bfa77.firebaseapp.com",
  projectId: "elias-academy-bfa77",
  storageBucket: "elias-academy-bfa77.appspot.com",
  messagingSenderId: "275328676422",
  appId: "1:275328676422:web:a7697bae3e8bd8c5865047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
