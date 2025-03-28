// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyB8LFEbAj7yFVKiNB98EczxMj-TicVxRqc",
  authDomain: "zenzone-fcca0.firebaseapp.com",
  projectId: "zenzone-fcca0",
  storageBucket: "zenzone-fcca0.appspot.com",
  messagingSenderId: "119449385837",
  appId: "1:119449385837:web:57d690ce3d2debc441f864",
  measurementId: "G-43S2NY9CTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
