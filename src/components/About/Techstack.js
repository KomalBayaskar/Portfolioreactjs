import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftexcel,
  SiMysql
} from "react-icons/si";
import { FaPython } from "react-icons/fa"
import { FcStatistics } from "react-icons/fc";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FcStatistics />
      </Col>
    </Row>
  );
}

export default Techstack;
