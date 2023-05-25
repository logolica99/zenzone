// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase-admin/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = !getApp().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app };
