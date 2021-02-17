import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAovNXRAFhT6q0-QZIe-Cj7QOfSAU8ezpA",
  authDomain: "aryan-firegram.firebaseapp.com",
  projectId: "aryan-firegram",
  storageBucket: "aryan-firegram.appspot.com",
  messagingSenderId: "422508638550",
  appId: "1:422508638550:web:1f9d3d0d75833db29da6f7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
