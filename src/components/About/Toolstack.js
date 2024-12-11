import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
   SiAnaconda,
  SiPycharm,
  SiTableau,
  SiPowerbi,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrMysql />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
