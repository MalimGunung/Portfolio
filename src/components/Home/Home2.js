import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll("[data-reveal]"));
    if (items.length === 0) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      items.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("reveal-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Container
      ref={sectionRef}
      fluid
      className="home-about-section home-about-section-compact"
      id="about"
    >
      <Container>
        <Row className="align-items-center">
          {/* LEFT: TEXT CONTENT */}
          <Col md={8} className="home-about-description">
            <h1
              data-reveal
              className="reveal reveal-up"
              style={{ fontSize: "2.6em", textAlign: "left", "--reveal-delay": "0ms" }}
            >
              LET ME <span className="purple-gradient"> INTRODUCE </span> MYSELF
            </h1>
            
            <div
              data-reveal
              className="home-about-body reveal reveal-up"
              style={{ textAlign: "left", fontSize: "1.1em", "--reveal-delay": "90ms" }}
            >
              <p data-reveal className="reveal reveal-up" style={{ "--reveal-delay": "140ms" }}>
                I am a Computer Science student at <b className="text-white">UiTM</b>, 
                specializing in <span style={{ color: "#00af5bff", fontWeight: "bold" }}>Mobile Computing</span>.
              </p>
              <p data-reveal className="reveal reveal-up" style={{ "--reveal-delay": "200ms" }}>
                My passion lies in bridging the gap between <i style={{ color: "#00af5bff" }}>complex backend logic</i> and <i style={{ color: "#00af5bff" }}>intuitive frontend design</i>.
              </p>

              {/* Modern Feature Box */}
              <div
                data-reveal
                className="highlight-box reveal reveal-up"
                style={{ "--reveal-delay": "260ms" }}
              >
                <p style={{ fontSize: "0.8em", textTransform: "uppercase", letterSpacing: "2px", color: "#ebebebff", fontWeight: "bold", marginBottom: "10px" }}>
                  Current Focus
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <span className="highlight-badge">Software Development</span>
                  <span className="highlight-badge">IoT & Automation</span>
                  <span className="highlight-badge">Security</span>
                </div>
              </div>

              <p
                data-reveal
                className="reveal reveal-up"
                style={{ color: "#ebebebff", fontSize: "0.9em", marginTop: "20px", "--reveal-delay": "320ms" }}
              >
                "Building applications that solve real-world operational problems efficiently."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
