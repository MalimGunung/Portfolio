import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      root
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "reveal-visible",
            entry.isIntersecting
          );
        });
      },
      { threshold: 0.2 }
    );

    const targets = root.querySelectorAll("[data-reveal]");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Particle />
      <Container ref={sectionRef} fluid className="about-section">
        <Container className="about-content">
          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <div
                data-reveal
                className="about-hero reveal"
                style={{ "--reveal-delay": "0ms" }}
              >
                <h1 className="about-title">
                  Simple Things <strong className="purple">About Me</strong>
                </h1>
                <div className="about-title-divider" />
              </div>

              <div
                data-reveal
                className="about-card-wrapper reveal"
                style={{ "--reveal-delay": "80ms" }}
              >
                <Aboutcard />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <section
                data-reveal
                className="about-block reveal"
                style={{ "--reveal-delay": "120ms" }}
              >
                <h2 className="about-block-title">
                  Professional <strong className="purple">Skillset</strong>
                </h2>
                <Techstack />
              </section>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <section
                data-reveal
                className="about-block reveal"
                style={{ "--reveal-delay": "160ms" }}
              >
                <h2 className="about-block-title">
                  <strong className="purple">Tools</strong> I use
                </h2>
                <Toolstack />
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
