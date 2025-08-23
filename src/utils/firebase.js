// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwKJMID8nOulYANIMo_rdgXhSAZq1eHCA",
  authDomain: "cinegpt-2025.firebaseapp.com",
  projectId: "cinegpt-2025",
  storageBucket: "cinegpt-2025.firebasestorage.app",
  messagingSenderId: "878657715039",
  appId: "1:878657715039:web:651ade2acb3813be3214ea",
  measurementId: "G-FJZYZ00P65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
