import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view" data-aos="zoom-in">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p className="quote-text">
        <br />
          A <span className="primary-header">...................</span> ...............................
          <br />
          An <span className="primary-header">.......................</span> ..............................................................
        </p>
        <br />
       
        <p className="sensor-title">...................:</p>
        <br />
        <ul className="sensor-list">
          <li className="about-activity">
            <AiOutlineArrowRight className="arrow-icon" /> ....................
          </li>
          <li className="about-activity">
            <AiOutlineArrowRight className="arrow-icon" /> ....................
          </li>
          {/* Add more sensors here if needed */}
        </ul>
        <br />
      </blockquote>
    </Card.Body>
  </Card>
  );
}

export default AboutCard;
