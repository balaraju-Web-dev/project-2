import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS78dmYurOAgwl6w5poKB9rtKFObJc3tM",
  authDomain: "flixxit-fa676.firebaseapp.com",
  projectId: "flixxit-fa676",
  storageBucket: "flixxit-fa676.appspot.com",
  messagingSenderId: "690171191434",
  appId: "1:690171191434:web:cc791a9af70826cafe4d73",
  measurementId: "G-MPDTPWTHJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
