import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./App.css";
import Video from "./Video";
import Logo from "../logo.png";
import Footer from "./Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [passToChild, setPassToChild] = useState("");

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setPassToChild(searchTerm);
  // };

  return (
    <div>
      <Col style={{ background: "rgba(0,0,0,0.86)", padding: "20px 10%" }}>
        <Col style={{ textAlign: "center" }}>
          <img
            src={require("../images/header.png")}
            alt="carry header"
            height="70px"
          />
        </Col>
      </Col>
      <Row style={{ padding: "0 10%", marginTop: 30 }}>
        <Video searchString={passToChild} />
      </Row>
      <Row style={{ padding: "0 10%" }}>
        <Footer />
      </Row>
    </div>
  );
}

export default App;
