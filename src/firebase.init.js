// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhSUzBf0dQUfkPIEr1YNWgFRDFllAbdGs",
  authDomain: "ema-jhon-simple-d3f96.firebaseapp.com",
  projectId: "ema-jhon-simple-d3f96",
  storageBucket: "ema-jhon-simple-d3f96.appspot.com",
  messagingSenderId: "793151918234",
  appId: "1:793151918234:web:bad823f46f7d09ad18cf23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;