import React from "react";
import { Col } from "react-bootstrap";

export default () => {
  return (
    <Col xs={12}>
      <p className="footer">
        Made with{" "}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>
        {"  "}
        by EduRise.
      </p>
    </Col>
  );
};
