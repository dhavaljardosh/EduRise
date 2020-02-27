import React, { useState } from "react";
import { TextInput, Button, Icon } from "react-materialize";
import signIn from "../api/signIn";

export default props => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const onChangeText = (key, value) => {
    const newData = { ...data };
    newData[key] = value;
    setData(newData);
  };

  const onSubmit = async () => {
    const result = signIn(data);
    if (result === true) {
      console.log("SIGN IN SUCCESSFUL");
      setError("");
    } else if (result === false) {
      console.log("Sign Up FAILED");
      setError("Email and Password Incorrect");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div className="outerBox w400">
        <h4 style={{ marginBottom: 50 }}>Sign In</h4>
        <TextInput
          label="Email"
          onChange={e => onChangeText("email", e.target.value)}
        />
        <TextInput
          label="Password"
          onChange={e => onChangeText("password", e.target.value)}
          type="password"
        />
        <Button node="button" type="submit" waves="light" onClick={onSubmit}>
          Submit
          <Icon right>send</Icon>
        </Button>
        <p>
          Already have an account?{" "}
          <span
            onClick={() => {
              props.changeState("SU");
            }}
            style={{
              marginLeft: 10,
              fontWeight: "600",
              color: "green",
              cursor: "pointer"
            }}
          >
            Sign Up
          </span>
        </p>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};
