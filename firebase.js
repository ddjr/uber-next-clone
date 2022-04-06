// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { googleAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCbV2YheteiCzG622r-8D0YR00NlwdI0wY",
  authDomain: "uber-clone-bcc2a.firebaseapp.com",
  projectId: "uber-clone-bcc2a",
  storageBucket: "uber-clone-bcc2a.appspot.com",
  messagingSenderId: "1063468311270",
  appId: "1:1063468311270:web:2ca2fde38d7d94aca29127",
  measurementId: "G-ZZRKYS9J8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
