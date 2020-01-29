import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD3TZfBsyf3w0uDcr-t2t3eOy_WzgPXI2Q",
  authDomain: "facebook-clone-faf0a.firebaseapp.com",
  databaseURL: "https://facebook-clone-faf0a.firebaseio.com",
  projectId: "facebook-clone-faf0a",
  storageBucket: "facebook-clone-faf0a.appspot.com",
  messagingSenderId: "528106835657",
  appId: "1:528106835657:web:d86a6499dda3b993044718",
  measurementId: "G-VRGW2KLNMW"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseApp.database().ref("users");

export const postRef = firebaseApp.database().ref("posts");

export const storageRef = firebaseApp.storage();
