import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineHighlight,
  AiOutlineCode,
  AiOutlineSafetyCertificate,
  AiOutlineWifi,
} from "react-icons/ai";

function Home3() {
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
    <Container ref={sectionRef} fluid className="home-about-section" id="services">
      <Container>
        {/* Top Section: Heading */}
        <Row className="mb-4">
          <Col md={12} className="service-heading-col text-start">
            <h1
              data-reveal
              className="reveal reveal-up"
              style={{
                fontSize: "2.75em",
                fontWeight: "bold",
                lineHeight: "1.15",
                color: "white",
                "--reveal-delay": "0ms",
              }}
            >
              How Can I <span style={{ fontWeight: "300" }}>Assist You?</span>
            </h1>
          </Col>
        </Row>

        {/* Bottom Section: Service Cards Grid */}
        <Row>
          {/* Service 1: UI Design */}
          <Col md={6} lg={6} className="mb-4">
            <div data-reveal className="service-card reveal reveal-up" style={{ "--reveal-delay": "80ms" }}>
              <div className="service-icon-wrapper">
                <span className="service-icon">
                  <AiOutlineHighlight />
                </span>
              </div>
              <p className="service-description">
                Designing interfaces that feel as good as they look responsive, accessible, and user friendly.
              </p>
              <div className="service-footer">
                <h3 className="service-title">UI Design</h3>
                <span className="service-number">01</span>
              </div>
            </div>
          </Col>

          {/* Service 2: Development */}
          <Col md={6} lg={6} className="mb-4">
            <div data-reveal className="service-card reveal reveal-up" style={{ "--reveal-delay": "140ms" }}>
              <div className="service-icon-wrapper">
                <span className="service-icon">
                  <AiOutlineCode />
                </span>
              </div>
              <p className="service-description">
                Scalable Web & Mobile Solutions. Clean code, high performance, and robust security standards
              </p>
              <div className="service-footer">
                <h3 className="service-title">Development</h3>
                <span className="service-number">02</span>
              </div>
            </div>
          </Col>

          {/* Service 3: Graphic Design */}
          <Col md={6} lg={6} className="mb-4">
            <div data-reveal className="service-card reveal reveal-up" style={{ "--reveal-delay": "200ms" }}>
              <div className="service-icon-wrapper">
                <span className="service-icon">
                  <AiOutlineSafetyCertificate />
                </span>
              </div>
              <p className="service-description">
               I adopt a security-first approach to coding. By integrating industry-standard encryption, 
               authentication, and secure data handling practices directly into the build process, 
               I ensure applications are resilient from day one
              </p>
              <div className="service-footer">
                <h3 className="service-title">Secure Development</h3>
                <span className="service-number">03</span>
              </div>
            </div>
          </Col> 

          {/* Service 4: IoT & Smart Systems */}
          <Col md={6} lg={6} className="mb-4">
            <div data-reveal className="service-card reveal reveal-up" style={{ "--reveal-delay": "260ms" }}>
              <div className="service-icon-wrapper">
                <span className="service-icon">
                  <AiOutlineWifi />
                </span>
              </div>
              <p className="service-description">
                I bridge the physical and digital worlds by integrating hardware with 
                software. I create dashboard interfaces and logic for smart devices, sensors, and automated systems.
              </p>
              <div className="service-footer">
                <h3 className="service-title">IoT & Smart Systems</h3>
                <span className="service-number">04</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;
