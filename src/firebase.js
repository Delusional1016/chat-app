//firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBru1AVKbrvhYF4AMChlfdRKmdFac5Q5rY",
  authDomain: "chat-app-f8085.firebaseapp.com",
  projectId: "chat-app-f8085",
  storageBucket: "chat-app-f8085.appspot.com",
  messagingSenderId: "547504457938",
  appId: "1:547504457938:web:e25ff69a2989a04a32450b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);