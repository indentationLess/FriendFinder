import { initializeApp } from "firebase/app";
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
const app = initializeApp(firebaseConfig);
export { app };