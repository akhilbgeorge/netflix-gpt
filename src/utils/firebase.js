// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANP3dldVOX9s8b0H2t28o7npwFxMmPZSo",
  authDomain: "netflixgpt-4555.firebaseapp.com",
  projectId: "netflixgpt-4555",
  storageBucket: "netflixgpt-4555.firebasestorage.app",
  messagingSenderId: "229865838740",
  appId: "1:229865838740:web:08a4e6ec6cf135598b3c81",
  measurementId: "G-TCH7Q1GFEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
