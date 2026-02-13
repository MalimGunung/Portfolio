import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pdf from "../../Assets/Muhammad Iqbal - RESUME.pdf";
import heroVideo from "../../Assets/gif1.mp4";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineDownload,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  useEffect(() => {
    document.documentElement.classList.add("snap-scroll");
    document.body.classList.add("snap-scroll");
    return () => {
      document.documentElement.classList.remove("snap-scroll");
      document.body.classList.remove("snap-scroll");
    };
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            
            {/* 1. TEXT SECTION (Now on the Left for better UX) */}
            <Col md={7} className="home-header">
              <div style={{ paddingLeft: "20px" }}>
                
                {/* Small Badge */}
                <div className="badge bg-primary bg-opacity-10 text-primary mb-3 px-4 py-3 rounded-3 border border-primary border-opacity-25 fs-5">
                   Welcome to my portfolio
                </div>

                <h1 className="heading hero-heading" style={{ color: "white" }}>
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M <strong className="main-name"> MUHAMMAD IQBAL</strong>
                </h1>

                {/* Typewriter is important, keep it clean */}
                <div style={{ padding: "20px 0", textAlign: "left", fontSize: "1.2em", color: "#a5a5a5" }}>
                  <Type />
                </div>

                {/* Call-to-Action Buttons */}
                <div className="cta-group">
                  <div className="cta-actions">
                    <Button
                      variant="primary"
                      href={pdf}
                      target="_blank"
                      className="btn-modern btn-modern-primary"
                    >
                      <AiOutlineDownload className="cta-icon" />
                      Download CV
                    </Button>

                    <Button
                      variant="primary"
                      as={Link}
                      to="/contact"
                      className="btn-modern btn-modern-ghost"
                    >
                      <AiOutlineMail className="cta-icon" />
                      Contact Me
                    </Button>
                  </div>

                  <ul className="home-about-social-links cta-social">
                    <li className="social-icons">
                      <a
                        href="https://github.com/MalimGunung"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="icon-colour home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/muhammad-iqbal-daud-9580b0343/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="icon-colour home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* 2. IMAGE SECTION (Right Side + Floating Animation) */}
            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "440px",
                  aspectRatio: "1 / 1",
                  marginInline: "auto",
                  borderRadius: "48px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="img-fluid hero-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    mixBlendMode: "screen",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
      <Home4 />
    </section>
  );
}

export default Home;
