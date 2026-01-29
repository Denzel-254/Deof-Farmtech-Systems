// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCtooyVc54NbFIkVfeROq0nLD8TUcUw3NA",
  authDomain: "authentication-8ea52.firebaseapp.com",
  projectId: "authentication-8ea52",
  storageBucket: "authentication-8ea52.firebasestorage.app",
  messagingSenderId: "501935797578",
  appId: "1:501935797578:web:d33c0d233bfef2de46fdb3",
  measurementId: "G-ZPQTSJ67L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
