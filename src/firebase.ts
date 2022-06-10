import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnoSR6vkcgc0AX56WNf3OxjSGrE-iU-dQ",
  authDomain: "fullstack-render.firebaseapp.com",
  projectId: "fullstack-render",
  storageBucket: "fullstack-render.appspot.com",
  messagingSenderId: "194716538969",
  appId: "1:194716538969:web:d6af40935b78291d477948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);