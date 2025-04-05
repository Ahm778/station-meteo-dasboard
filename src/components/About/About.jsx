import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Header from "../../partials/Header";
import Footer from '../../components/Footer';

function About() {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1
                className="primary-header secondary-header" /* Utilisation des classes de style */
                data-aos="fade-right"
              >
                About Our Project
              </h1>
              <div data-aos="fade-up">
                <Aboutcard />
              </div>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                data-aos="fade-left"
              />
            </Col>
          </Row>
          <h1 className="primary-header secondary-header" data-aos="fade-right">
          <span className="primary-header">collected </span> data
          </h1>

          <div data-aos="fade-up" className="about-content"> {/* Utilisation de la classe de style */}
            <Techstack />
          </div>

          <h1 className="primary-header secondary-header" data-aos="fade-right">
          <span className="primary-header">Tools</span> We use
          </h1>
          <div data-aos="fade-up" className="about-content"> {/* Utilisation de la classe de style */}
            <Toolstack data-aos="fade-up" />
          </div>
          
        </Container>
        <ScrollToTop />
      </Container>
      
      <Footer />
    </div>
    
  );
}

export default About;
