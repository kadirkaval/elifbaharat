// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjC55htN4IOlHJPqoVJxjcrzihRcBiOsQ",
  authDomain: "elifbaharat-4c128.firebaseapp.com",
  projectId: "elifbaharat-4c128",
  storageBucket: "elifbaharat-4c128.appspot.com",
  messagingSenderId: "198713641483",
  appId: "1:198713641483:web:1bf3dc8de649c3d28e150e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();