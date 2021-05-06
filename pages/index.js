import firebase from "firebase/app";
import fire from "../components/firebase/fire";
import React, { useState, useEffect } from "react";
import Login from "./login";
import Home from "./home";
require("firebase/auth");

const Main = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginPress = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {})
      .catch(function (error) {
        console.log("error");
      });
  };
  const authListener = () =>
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      {user ? (
        <Home />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={loginPress}
        />
      )}
    </div>
  );
};

export default Main;
