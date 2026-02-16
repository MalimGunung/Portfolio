import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lolaLogo from "../../Assets/lola.jpg";
import solvnexLogo from "../../Assets/Solvnex.png";
import ihaxLogo from "../../Assets/I-Hax.png";

const experiences = [
  {
    company: "Lola Digital",
    role: "Front-End Developer Intern",
    period: "2025–2026",
  },
  {
    company: "Solvnex",
    role: "Software Developer Freelancer",
    period: "2025–2026",
  },
  {
    company: "I-HAX 2024",
    role: "Innovation Hackathon (Winner)",
    period: "2024",
  },
];

function Home4() {
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

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const footerObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        document.body.classList.toggle("show-footer", entry.isIntersecting);
      },
      { threshold: 0.45, rootMargin: "0px 0px -15% 0px" }
    );

    footerObserver.observe(root);

    return () => {
      footerObserver.disconnect();
      document.body.classList.remove("show-footer");
    };
  }, []);

  return (
    <Container ref={sectionRef} fluid className="home-about-section" id="experience">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <div data-reveal className="exp-card exp-cta-card reveal reveal-up" style={{ "--reveal-delay": "0ms" }}>
              <div className="exp-cta-content">
                <h2 data-reveal className="exp-cta-title reveal reveal-up" style={{ "--reveal-delay": "70ms" }}>
                  Wanna see my experience?
                </h2>
                <Button
                  className="exp-cta-button"
                  as={Link}
                  to="/contact"
                  data-reveal
                  style={{ "--reveal-delay": "140ms" }}
                >
                  Let's Connect!
                </Button>
              </div>
            </div>
          </Col>

          {experiences.map((item, idx) => (
            <Col key={item.company} md={6}>
              <div
                data-reveal
                className="exp-card reveal reveal-up"
                style={{ "--reveal-delay": `${180 + idx * 70}ms` }}
              >
                <div className="exp-card-top">
                  <div className="exp-logo" aria-hidden="true">
                    {item.company === "Lola Digital" ? (
                      <img src={lolaLogo} alt="Lola Digital" loading="lazy" />
                    ) : item.company === "Solvnex" ? (
                      <img src={solvnexLogo} alt="Solvnex" loading="lazy" />
                    ) : item.company === "I-HAX 2024" ? (
                      <img src={ihaxLogo} alt="I-HAX" loading="lazy" />
                    ) : (
                      item.company.slice(0, 1).toUpperCase()
                    )}
                  </div>
                  <div className="exp-company">{item.company}</div>
                </div>
                <div className="exp-role">{item.role}</div>
                <div className="exp-period">{item.period}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Home4;
