// firebase.config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4EiIkKK3aIFbAAWSI0V39ZhN2r-4T9eY",
  authDomain: "campuslyft.firebaseapp.com",
  projectId: "campuslyft",
  storageBucket: "campuslyft.appspot.com",
  messagingSenderId: "564925939440",
  appId: "1:564925939440:web:0e6dff74b11d83ad1d0c35",
  measurementId: "G-65F4DVS21Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const storage = getStorage(app); // Correct usage of getStorage function
