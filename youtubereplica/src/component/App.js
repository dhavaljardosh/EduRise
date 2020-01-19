import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./App.css";
import Video from "./Video";
import Logo from "../logo.png";
import Footer from "./Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [passToChild, setPassToChild] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    setPassToChild(searchTerm);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={event => onSubmit(event)}>
            <Form.Row className="search-box">
              <Col xs={12} md={2} style={{ margin: "auto" }}>
                <img
                  src={Logo}
                  alt="youtube logo"
                  width="100px"
                  style={{ margin: "auto" }}
                />
              </Col>
              <Col md={7} xs={9}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Search video here..."
                  onChange={event => setSearchTerm(event.target.value)}
                  style={{ flex: 1 }}
                />
              </Col>
              <Col xs={3} md={3}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={event => onSubmit(event)}
                >
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Video searchString={passToChild} />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
