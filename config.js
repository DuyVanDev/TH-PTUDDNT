import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACLWRkGQFg08pSK24Nw4MK4p2ABlxQ200",
  authDomain: "test-1e415.firebaseapp.com",
  projectId: "test-1e415",
  storageBucket: "test-1e415.appspot.com",
  messagingSenderId: "727678837762",
  appId: "1:727678837762:web:9d9658dfd6be6e2823b31b",
  measurementId: "G-TE1GJ76EFH",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
