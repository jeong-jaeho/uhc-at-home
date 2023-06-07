// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfVnwGVtuWCaCezR96B1la_Pieat302yM",
  authDomain: "uhc-home.firebaseapp.com",
  projectId: "uhc-home",
  storageBucket: "uhc-home.appspot.com",
  messagingSenderId: "716390489991",
  appId: "1:716390489991:web:5413b6ebee9199f4e37d22",
  measurementId: "G-82L275Z120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);