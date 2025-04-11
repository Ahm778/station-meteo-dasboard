import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import homeIcon from "./Assets/nnj.png";
import myImg from "./Assets/im.png";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer'; // Import du composant Footer
import Header from './partials/Header';

function Welcome() {
  const [load, updateLoad] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="light app">
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <section>
            <Container fluid className="home-section" id="home" style={{ position: "relative", zIndex: "1", backgroundColor: "var(--clr-bg)", paddingBottom: "10px", paddingTop: "10px" }}>
              <style>
                {`
                  .wave {
                    animation-name: wave-animation;
                    animation-duration: 2.1s;
                    animation-iteration-count: infinite;
                    transform-origin: 70% 70%;
                    display: inline-block;
                  }

                  @keyframes wave-animation {
                    0% {
                      transform: rotate(0deg);
                    }
                    10% {
                      transform: rotate(14deg);
                    }
                    20% {
                      transform: rotate(-8deg);
                    }
                    30% {
                      transform: rotate(14deg);
                    }
                    40% {
                      transform: rotate(-4deg);
                    }
                    50% {
                      transform: rotate(10deg);
                    }
                    60% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(0deg);
                    }
                  }

                  .home-header {
                    padding-top: 80px !important;
                  }

                  .home-section {
                    position: relative;
                    z-index: 1;
                    background-color: var(--clr-bg);
                    padding-bottom: 30px !important;
                    padding-top: 30px !important;
                  }

                  .home-content {
                    padding: 9rem 2rem !important;
                    color: var(--clr-txt);
                    text-align: left;
                  }

                  .heading {
                    font-size: 2.4em !important;
                    padding-left: 50px !important;
                  }

                  .heading-name {
                    font-size: 5em !important;
                    padding-left: 45px !important;
                  }

                  .main-name {
                    color: var(--clr-primary) !important;
                    font-size: 0.8em; /* Taille de police plus petite */
                  }

                  .Typewriter__wrapper {
                    font-size: 1.5em !important;
                    color: var(--clr-primary) !important;
                    font-weight: 600 !important;
                    padding-left: 25px;
                  }

                  .Typewriter__cursor {
                    font-size: 2.4em !important;
                    color: var(--clr-primary) !important;
                  }

                  @media (max-width: 991px) {
                    .heading {
                      font-size: 2.3em !important;
                      padding-left: 0px !important;
                      text-align: left !important;
                    }

                    .heading-name {
                      font-size: 4em !important;
                      padding-left: 0px !important;
                      text-align: left !important;
                    }

                    .type {
                      padding-left: 0px;
                    }

                    .Typewriter__wrapper {
                      font-size: 1.3em !important;
                      padding: 0px !important;
                    }

                    .Typewriter__cursor {
                      font-size: 1.5em !important;
                    }
                  }

                  @media (max-width: 767px) {
                    .heading {
                      font-size: 2.2em !important;
                      padding-left: 20px !important;
                      text-align: left !important;
                    }

                    .heading-name {
                      font-size: 3em !important;
                      padding-left: 20px !important;
                      text-align: left !important;
                    }

                    .type {
                      text-align: left !important;
                    }

                    .Typewriter__wrapper {
                      text-align: center !important;
                      font-size: 1.2em !important;
                      font-weight: 400 !important;
                      position: absolute;
                    }

                    .Typewriter__cursor {
                      display: none !important;
                    }
                  }

                  .myAvtar {
                    justify-content: center !important;
                    padding-top: 9em !important;
                  }

                  @media (max-width: 767px) {
                    .myAvtar {
                      padding-top: 2em !important;
                      padding-bottom: 2em !important;
                    }
                  }

                  .home-about-section {
                    position: relative;
                    padding-bottom: 70px !important;
                    padding-top: 70px !important;
                    background-color: var(--clr-bg-alt);
                  }

                  .home-about-description {
                    color: var(--clr-txt) !important;
                    padding-top: 100px !important;
                    padding-bottom: 20px !important;
                    text-align: center !important;
                  }

                  .home-about-body {
                    padding-top: 50px;
                    font-size: 1.2em !important;
                    text-align: left;
                  }

                  .home-about-social {
                    text-align: center !important;
                    padding-top: 25px;
                    color: var(--clr-txt) !important;
                  }

                  .home-about-social-links {
                    justify-content: center !important;
                    padding-top: 15px !important;
                    display: inline-block !important;
                    position: relative !important;
                    padding-inline-start: 0 !important;
                  }

                  .home-social-icons {
                    position: relative !important;
                    display: inline-block !important;
                    width: 40px !important;
                    height: 40px !important;
                    text-align: center !important;
                    font-size: 1.2em !important;
                    line-height: 2em !important;
                    background: var(--clr-bg) !important;
                    box-shadow: var(--shadow) !important;
                    border-radius: 50% !important;
                    transition: 0.5s !important;
                  }

                  .home-social-icons::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: var(--clr-primary);
                    transition: 0.5s;
                    transform: scale(0.9);
                    z-index: -1;
                  }

                  .home-social-icons:hover::before {
                    transform: scale(1.1);
                    box-shadow: 0 0 15px var(--clr-primary);
                  }

                  .home-social-icons:hover {
                    color: var(--clr-primary);
                    box-shadow: 0 0 5px var(--clr-primary);
                    text-shadow: 0 0 2px var(--clr-primary);
                  }

                  .social-icons {
                    display: inline-block !important;
                    padding-right: 10px;
                    padding-left: 10px;
                    color: var(--clr-primary);
                  }

                  .icon-colour {
                    color: var(--clr-primary) !important;
                  }

                  .highlight-blue {
                    color: blue; /* Couleur du texte en bleu */
                  }

                  .red-text {
                    color: red;
                  }
                `}
              </style>
              <Container fluid className="home-section" id="home">
                <Container className="home-content">
                  <Row>
                    <Col md={7} className="home-header">
                      <h1 style={{ paddingBottom: 15 }} className="heading">
                        Bienvenue  👋🏻 dans notre {" "}
                      </h1>
                      <h1 className="heading-name">
  <strong className="main-name">Station 🌤️ météo    </strong>
</h1>

                      <div style={{ padding: 30 }} className="type">
                        <Typewriter
                          options={{
                            strings: [
                              "<span class='red-text'>L'application a été developpé par x y z w</span>",
                              "Application IoT pour la collecte de données météorologiques",
      "Tableau de bord interactif pour surveiller la météo",
      "Visualisation graphique de la température, humidité, pression",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                          }}
                        />
                      </div>
                    </Col>
                    <Col md={5} style={{ paddingBottom: 0 }}>
                      <img
                        src={homeIcon}
                        alt="home pic"
                        className="img-fluid"
                        style={{ paddingTop: 0 }}
                      />
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Container>
            <Container fluid className="home-about-section" id="about" style={{ 
  position: "relative", 
  padding: "100px 0",
  backgroundColor: "var(--clr-bg-alt)",
  overflow: "hidden"
}}>
  {/* Background decorative elements */}
  <div style={{
    position: "absolute",
    top: "-50px",
    right: "-50px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(100,149,237,0.15) 0%, rgba(0,0,0,0) 70%)",
    zIndex: 0
  }}></div>
  
  <div style={{
    position: "absolute",
    bottom: "20px",
    left: "-100px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(70,130,180,0.1) 0%, rgba(0,0,0,0) 70%)",
    zIndex: 0
  }}></div>

  <Container style={{ position: "relative", zIndex: 1 }}>
    <Row className="align-items-center">
      <Col md={8} className="home-about-description" style={{ 
        color: "var(--clr-txt)", 
        padding: "50px 0"
      }}>
        <h1 style={{ 
          fontSize: "3rem", 
          fontWeight: 700,
          marginBottom: "2rem",
          background: "linear-gradient(90deg, #1e90ff, #00bfff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "left"
        }} data-aos="fade-right">
          À PROPOS DE <span style={{ fontStyle: "italic" }}>MARINE SENSE</span>
        </h1>
        
        <div className="about-features" style={{ 
          backgroundColor: "rgba(30, 144, 255, 0.05)",
          borderRadius: "20px",
          padding: "30px",
          borderLeft: "4px solid #1e90ff",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)"
        }}>
          <p className="home-about-body" style={{ 
            fontSize: "1.1rem", 
            lineHeight: "1.8",
            textAlign: "left",
            position: "relative"
          }}>
            <span style={{
              position: "absolute",
              left: "-25px",
              top: "0",
              fontSize: "2rem",
              color: "#1e90ff"
            }}>❝</span>
            
            Notre <span className="highlight" style={{ 
              fontWeight: 600,
              color: "#1e90ff",
              position: "relative",
              display: "inline-block"
            }}>
              <span style={{
                position: "absolute",
                bottom: "2px",
                left: 0,
                width: "100%",
                height: "8px",
                backgroundColor: "rgba(30, 144, 255, 0.2)",
                zIndex: -1,
                transform: "skewX(-15deg)"
              }}></span>
              plateforme IoT marine
            </span> révolutionne la collecte de <span className="highlight" style={{ 
              fontWeight: 600,
              color: "#1e90ff"
            }}>données environnementales</span> grâce à un réseau de capteurs intelligents déployés en milieu maritime.
            
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap",
              gap: "15px",
              margin: "25px 0"
            }}>
              {['Température', 'Humidité', 'Pression', 'Luminosité', 'Qualité air', 'CO2', 'VOC'].map((item, index) => (
                <span key={index} style={{
                  backgroundColor: "rgba(30, 144, 255, 0.1)",
                  color: "#1e90ff",
                  padding: "5px 15px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  border: "1px solid rgba(30, 144, 255, 0.3)"
                }}>
                  {item}
                </span>
              ))}
            </div>

            Les données sont visualisées en temps réel sur un <span className="highlight" style={{ 
              fontWeight: 600,
              color: "#1e90ff"
            }}>tableau de bord interactif</span> permettant une analyse approfondie avec des outils de zoom, de comparaison historique et d'export avancé.
            
            <div style={{ 
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "rgba(255, 69, 0, 0.05)",
              borderRadius: "15px",
              borderLeft: "3px solid #FF4500"
            }}>
              Projet développé par <span style={{ 
                fontWeight: 700, 
                color: "#FF4500",
                textDecoration: "underline",
                textUnderlineOffset: "3px"
              }}>XYZ</span> et <span style={{ 
                fontWeight: 700, 
                color: "#FF4500",
                textDecoration: "underline",
                textUnderlineOffset: "3px"
              }}>W</span>, étudiants en <span style={{ 
                fontWeight: 600, 
                color: "#1e90ff"
              }}>1ING4</span>, dans le cadre d'un projet d'innovation technologique.
            </div>
          </p>
        </div>
      </Col>

      <Col md={4} style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0"
      }}>
        <Tilt 
          tiltReverse={true}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.05}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <div style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(30, 144, 255, 0.25)",
            transformStyle: "preserve-3d",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <img
              data-aos="fade-left"
              src={myImg}
              className="img-fluid"
              alt="Station météo IoT"
              style={{
                borderRadius: "20px",
                transform: "translateZ(30px)",
                filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))"
              }}
            />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
              padding: "20px",
              color: "white",
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: 500
            }}>
              Station météo connectée
            </div>
          </div>
        </Tilt>
      </Col>
    </Row>

    <Row>
      <Col md={12} style={{ 
        textAlign: "center", 
        marginTop: "50px"
      }}>
        <Button 
          variant="primary" 
          href="/dashboard"
          style={{
            padding: "12px 30px",
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: "50px",
            background: "linear-gradient(135deg, #1e90ff, #00bfff)",
            border: "none",
            boxShadow: "0 4px 15px rgba(30, 144, 255, 0.4)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease",
            zIndex: 1
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 7px 20px rgba(30, 144, 255, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(30, 144, 255, 0.4)";
          }}
        >
          <span style={{ position: "relative", zIndex: 2 }}>
            Explorer le dashboard
          </span>
          <span style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #00bfff, #1e90ff)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 0
          }}></span>
        </Button>
      </Col>
    </Row>
  </Container>
            </Container>
          </section>
        </div>
      </div>
      <Footer /> {/* Ajout du composant Footer */}
    </div>
  );
}

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Computer Science Engineer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Welcome;
