import firebase from "firebase/compat/app"; // Correct import for compat
import "firebase/compat/firestore"; // Correct import for compat
import "firebase/compat/database";  // Import for the Realtime Database

const firebaseConfig = {
    apiKey: "AIzaSyBto67r5JPtEboY2b-08v60GDsDHSpdAdg",
    authDomain: "projetodispositivos-4fec6.firebaseapp.com",
    projectId: "projetodispositivos-4fec6",
    storageBucket: "projetodispositivos-4fec6.firebasestorage.app",
    messagingSenderId: "550321060997",
    appId: "1:550321060997:web:cbb6d519d61dc2fe54bdec"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();  // Get the Realtime Database instance

export { firebase, db, firebaseConfig };