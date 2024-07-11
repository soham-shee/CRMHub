import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYyJentB7IskYLfjCNl2gjeQuL8-V_-eE",
  authDomain: "scrm-47b9f.firebaseapp.com",
  projectId: "scrm-47b9f",
  storageBucket: "scrm-47b9f.appspot.com",
  messagingSenderId: "546305968700",
  appId: "1:546305968700:web:4a67f287e138cfc9741139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()