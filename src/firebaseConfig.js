// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
  increment,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
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
// Auto-detect long-polling: the default WebChannel transport is blocked by some
// networks / privacy setups / headless browsers, which left blog reads hanging.
const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  db,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
  increment,
  auth,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  provider,
  analytics,
};
