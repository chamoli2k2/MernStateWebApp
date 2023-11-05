// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-580c6.firebaseapp.com",
  projectId: "mern-estate-580c6",
  storageBucket: "mern-estate-580c6.appspot.com",
  messagingSenderId: "775588406499",
  appId: "1:775588406499:web:b18968f598ae4cdb2891d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);