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
            <Container fluid className="home-about-section" id="about">
              <Container fluid className="home-about-section" id="about" style={{ position: "relative", paddingBottom: "70px", paddingTop: "70px", backgroundColor: "var(--clr-bg-alt)" }}>
                <Container>
                  <Row>
                  <Col md={8} className="home-about-description" style={{ color: "var(--clr-txt)", paddingTop: "100px", paddingBottom: "20px", textAlign: "center" }}>
    <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
      <span className="primary-header">À PROPOS DE L'APPLICATION</span> 
    </h1>
    <p className="home-about-body" style={{ paddingTop: "50px", fontSize: "1.2em", textAlign: "left" }}>
  Notre <span className="highlight-blue" style={{ fontWeight: "bold" }}>application IoT</span> vise à collecter des <span className="highlight-blue" style={{ fontWeight: "bold" }}>données météorologiques</span> à partir de capteurs installés dans une station météo et à les transmettre à un <span className="highlight-blue" style={{ fontWeight: "bold" }}>tableau de bord</span> pour une surveillance en temps réel.
  <br /><br />
  Les données incluent la température, l'humidité, la pression atmosphérique, la vitesse du vent, etc.
  <br /><br />
  Elles sont présentées <span className="highlight-blue" style={{ fontWeight: "bold" }}>sous forme de graphiques</span> interactifs sur le tableau de bord.
  <br /><br />
  L’utilisateur peut suivre l'évolution du climat local, zoomer sur certaines périodes et <span className="highlight-blue" style={{ fontWeight: "bold" }}>exporter les données</span> si besoin.
  <br /><br />
  Ce projet a été réalisé dans le cadre d’un <span className="highlight-blue" style={{ fontWeight: "bold" }}>mini projet</span> par <span style={{ color: "#FF4500", fontWeight: "bold" }}>x y z</span> et <span style={{ color: "#FF4500", fontWeight: "bold" }}>w</span>, étudiants en <span className="highlight-blue" style={{ fontWeight: "bold" }}>1ING4</span>.
</p>

  </Col>
                    <Col md={4} className="myAvtar" style={{ justifyContent: "center", paddingTop: "9em" }}>
                      <Tilt>
                        <img
                          data-aos="fade-left"
                          src={myImg}
                          className="img-fluid"
                          alt="avatar"
                        />
                      </Tilt>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12} className="home-about-social" style={{ textAlign: "center", paddingTop: "25px", color: "var(--clr-txt)" }}>
                      <p>
                        <Button variant="primary" href="/dashboard">
                          Accéder à mon dashboard
                        </Button>
                      </p>
                    </Col>
                  </Row>
                </Container>
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
