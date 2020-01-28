import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { userRef, firebaseApp } from "./firebase";
import signUp from "./api/signUp";
import signIn from "./api/signIn";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Feed from "./components/Feed";
import Navbar from "./components/Reusable/Navbar";

function App() {
  const [stage, setStage] = useState("");
  const [signUpSignIn, setSignUpSignIn] = useState("SI");

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user.uid);
        setStage("loggedIn");
        setSignUpSignIn("SI");
      } else {
        // No user is signed in.
        console.log("No User Logged In");
        setStage("notLoggedIn");
      }
    });
  }, []);

  const changeState = value => {
    //SI or SU

    setSignUpSignIn(value);
  };

  return (
    <div className="App">
      <Navbar stage={stage} />
      {stage === "loggedIn" && <Feed />}
      {stage === "notLoggedIn" && signUpSignIn === "SI" && (
        <SignIn changeState={changeState} />
      )}
      {stage === "notLoggedIn" && signUpSignIn === "SU" && (
        <SignUp changeState={changeState} />
      )}
    </div>
  );
}

export default App;
