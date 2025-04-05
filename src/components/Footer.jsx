import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
          Copyright © 2024 - Application IoT{" "}
            <i className="primary-header"></i>
          </span>
        </Col>
        
        
      </Row>
    </Container>
  );
}

export default Footer;
