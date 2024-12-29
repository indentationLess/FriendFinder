import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBH6aFFSAQZhxUy7RZUJRBtifAhrkbX0GY",

  authDomain: "friendfinder-a160d.firebaseapp.com",

  projectId: "friendfinder-a160d",

  storageBucket: "friendfinder-a160d.firebasestorage.app",

  messagingSenderId: "155818288451",

  appId: "1:155818288451:web:fdc750ae436548ee1abbf6"

};

if (!firebaseConfig.apiKey) {
  console.error("Firebase API key is missing. Please check your environment variables.");
  throw new Error("Firebase API key is missing.");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };