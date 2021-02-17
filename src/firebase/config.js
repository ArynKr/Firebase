import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

require("dotenv").config();
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "aryan-firegram.firebaseapp.com",
  projectId: "aryan-firegram",
  storageBucket: "aryan-firegram.appspot.com",
  messagingSenderId: "FIREBASE_SENDER_ID",
  appId: "FIREBASE_APP_ID",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
