import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrxbf0AZweM6hCg9RJ9EkHRyQhJA3iFQc",
  authDomain: "jm-projects-90e90.firebaseapp.com",
  projectId: "jm-projects-90e90",
  storageBucket: "jm-projects-90e90.appspot.com",
  messagingSenderId: "352604748804",
  appId: "1:352604748804:web:16a572940ca806a8420951",
  measurementId: "G-BPKTR53W7D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
