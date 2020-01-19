import * as firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCacIqkRv96CVupamzG4Pio8zkCvbcVRnc",
  authDomain: "dict-54a29.firebaseapp.com",
  databaseURL: "https://dict-54a29.firebaseio.com",
  projectId: "dict-54a29",
  storageBucket: "dict-54a29.appspot.com",
  messagingSenderId: "3332037286",
  appId: "1:3332037286:web:48144e87dc84ea36c2b267",
  measurementId: "G-X8PMEGKFPQ"
};
export const firebaseApp = firebase.initializeApp(config);
export const wordRef = firebaseApp.database().ref("word");
export const meaningRef = firebaseApp.database().ref("meaning");
