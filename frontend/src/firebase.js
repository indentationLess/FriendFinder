// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "friendfinder-d883d.firebaseapp.com",
  projectId: "friendfinder-d883d",
  storageBucket: "friendfinder-d883d.firebasestorage.app",
  messagingSenderId: "86573929321",
  appId: "1:86573929321:web:3032caa8f7adfc5868a3f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);