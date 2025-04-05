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
          A <span className="primary-header">Light and Color Sensor</span> detects ambient light and color intensity.
          <br />
          An <span className="primary-header">Environmental Sensor</span> measures temperature, humidity, atmospheric pressure, and air quality.
        </p>
        <br />
       
        <p className="sensor-title">The sensors used are:</p>
        <br />
        <ul className="sensor-list">
          <li className="about-activity">
            <AiOutlineArrowRight className="arrow-icon" /> Light and Color Sensor
          </li>
          <li className="about-activity">
            <AiOutlineArrowRight className="arrow-icon" /> Environmental Sensor
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
