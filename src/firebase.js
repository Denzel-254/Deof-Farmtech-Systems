// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtooyVc54NbFIkVfeROq0nLD8TUcUw3NA",
  authDomain: "authentication-8ea52.firebaseapp.com",
  projectId: "authentication-8ea52",
  storageBucket: "authentication-8ea52.appspot.com", // optional
  messagingSenderId: "501935797578",
  appId: "1:501935797578:web:d33c0d233bfef2de46fdb3",
  measurementId: "G-ZPQTSJ67L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore only (Storage no longer needed)
export const db = getFirestore(app);
