// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACLWRkGQFg08pSK24Nw4MK4p2ABlxQ200",
  authDomain: "test-1e415.firebaseapp.com",
  projectId: "test-1e415",
  storageBucket: "test-1e415.appspot.com",
  messagingSenderId: "727678837762",
  appId: "1:727678837762:web:9d9658dfd6be6e2823b31b",
  measurementId: "G-TE1GJ76EFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)