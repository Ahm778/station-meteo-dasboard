import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaThermometerHalf,
  FaTint,
  FaWeightHanging,
  FaLightbulb,
  FaCompass,
  FaMicroscope,
  FaWater,
  FaRulerVertical,
  FaPalette,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Utilisation d'icônes Font Awesome

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaThermometerHalf /> {/* Température */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTint /> {/* Humidité */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRulerVertical /> {/* Pression */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLightbulb /> {/* Lumière */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCompass /> {/* Accéléromètre */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicroscope /> {/* Qualité d'air (IAQ) */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWater /> {/* Température d'eau */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWeightHanging /> {/* Niveau d'eau (cm) */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPalette /> {/* Couleur */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMapMarkerAlt /> {/* Géolocalisation */}
      </Col>
    </Row>
  );
}

export default Techstack;
