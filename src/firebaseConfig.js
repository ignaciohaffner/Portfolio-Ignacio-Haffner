// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  increment,
} from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlaxmvfLnx7XhZMn5xOwDE3IC3oPzJRC4",
  authDomain: "portfolio-ignaciohaffner.firebaseapp.com",
  projectId: "portfolio-ignaciohaffner",
  storageBucket: "portfolio-ignaciohaffner.appspot.com",
  messagingSenderId: "879076429934",
  appId: "1:879076429934:web:690fc99bddde0dbe2c167f",
  measurementId: "G-258EEBGJ0K",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  db,
  doc,
  getDoc,
  setDoc,
  increment,
  auth,
  signInWithRedirect,
  getRedirectResult,
  provider,
};
