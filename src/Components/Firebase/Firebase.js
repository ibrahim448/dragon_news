// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvx-_0RLAgHtamp_6WtSSJOJYLxkASADA",
  authDomain: "dragon-news-731eb.firebaseapp.com",
  projectId: "dragon-news-731eb",
  storageBucket: "dragon-news-731eb.appspot.com",
  messagingSenderId: "66379126468",
  appId: "1:66379126468:web:bfaca33caae7aa8f0a9b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)