// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4_b4zQ_p8QuksZt88Ph172p_tzxtYi1c",
  authDomain: "react-portfolio-projects-e7d2c.firebaseapp.com",
  projectId: "react-portfolio-projects-e7d2c",
  storageBucket: "react-portfolio-projects-e7d2c.appspot.com",
  messagingSenderId: "326324928750",
  appId: "1:326324928750:web:4f3478f82d39b21c8673ff",
  measurementId: "G-8LT1CX6YC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);