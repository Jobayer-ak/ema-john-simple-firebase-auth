// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVk8J1eP0W4MAX_S-R1p8Zyui9EhlDPOU",
  authDomain: "ema-john-simple-1d2f5.firebaseapp.com",
  projectId: "ema-john-simple-1d2f5",
  storageBucket: "ema-john-simple-1d2f5.appspot.com",
  messagingSenderId: "395041311391",
  appId: "1:395041311391:web:d87aa0358bd46aedba30aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
