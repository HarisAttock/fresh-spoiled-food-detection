// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6-T-afXC-ryqOv74Bxedeqias_DTaXIM",
  authDomain: "fir-fyp-6c287.firebaseapp.com",
  projectId: "fir-fyp-6c287",
  storageBucket: "fir-fyp-6c287.appspot.com",
  messagingSenderId: "197164602693",
  appId: "1:197164602693:web:d9d90342cf7883dad09a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);