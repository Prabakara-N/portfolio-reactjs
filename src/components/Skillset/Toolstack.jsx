import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiNetlify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
};

export default Toolstack;
