// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore pour la base de données
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Authentification
import { getAnalytics } from "firebase/analytics";

// Configuration de votre application Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSq5fRnPfUel4jEu0NbqjsKQyD_JgD1j0",
  authDomain: "komaye-7bc1b.firebaseapp.com",
  projectId: "komaye-7bc1b",
  storageBucket: "komaye-7bc1b.appspot.com",
  messagingSenderId: "281618620764",
  appId: "1:281618620764:web:d02f56371c100bdcf6e199",
  measurementId: "G-X8H2LBLG8W"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser les services Firebase
const analytics = getAnalytics(app); // Pour l'analytics (optionnel)
const db = getFirestore(app); // Pour Firestore
const auth = getAuth(app); // Pour l'authentification
const googleProvider = new GoogleAuthProvider(); // Pour l'authentification Google

// Exportez les services nécessaires
export { app, analytics, db, auth, googleProvider };
