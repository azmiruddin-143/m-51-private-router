// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0rNuq1hlnMJgYfipXqGZ7i3RcqphG9do",
  authDomain: "react-privet-router-30e2b.firebaseapp.com",
  projectId: "react-privet-router-30e2b",
  storageBucket: "react-privet-router-30e2b.firebasestorage.app",
  messagingSenderId: "186842167987",
  appId: "1:186842167987:web:e81aeb2f53bfd0cf9b4ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)