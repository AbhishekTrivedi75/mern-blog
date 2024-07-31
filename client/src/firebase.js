// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-33776.firebaseapp.com",
  projectId: "mern-blog-33776",
  storageBucket: "mern-blog-33776.appspot.com",
  messagingSenderId: "735216550458",
  appId: "1:735216550458:web:1f785baa24ba89445c2b03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);