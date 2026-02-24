import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import ProjectCard from "../Projects/ProjectCards";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import cloudPractitioner from "../../Assets/Award&Cert/Cloud-Praticioner-SE.pdf";
import iHaxHackathon from "../../Assets/Award&Cert/I-HAX 2024 INNOVATION HACKATHON.pdf";
import iHaxParticipation from "../../Assets/Award&Cert/I-HAX 2024-Participation.pdf";
import introCybersecurity from "../../Assets/Award&Cert/Intro-Cybersecurity.pdf";
import introIot from "../../Assets/Award&Cert/Intro-IOT.pdf";
import introModernAi from "../../Assets/Award&Cert/Intro-ModernAI.pdf";
import penetrationTester from "../../Assets/Award&Cert/Penetration-Tester.pdf";

function useHorizontalScroll() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    const raf = requestAnimationFrame(updateScrollState);
    const timer = setTimeout(updateScrollState, 200);

    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByOneCard = useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const firstItem = el.querySelector(".projects-scroll-item");
    const cardWidth = firstItem?.getBoundingClientRect?.().width;
    const gapValue = parseFloat(getComputedStyle(el).gap || "0");
    const amount =
      (Number.isFinite(cardWidth) ? cardWidth : 360) +
      (Number.isFinite(gapValue) ? gapValue : 0);

    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }, []);

  return { scrollRef, canScrollLeft, canScrollRight, scrollByOneCard };
}

function About() {
  const sectionRef = useRef(null);
  const awardsScroll = useHorizontalScroll();

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

          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <section
                data-reveal
                className="about-block reveal"
                style={{ "--reveal-delay": "200ms" }}
              >
                <h2 className="about-block-title">
                  <strong className="purple">Awards</strong> & Certifications
                </h2>

                <div className="projects-scroll-wrap">
                  <button
                    type="button"
                    className="projects-scroll-btn projects-scroll-btn-left"
                    onClick={() => awardsScroll.scrollByOneCard(-1)}
                    disabled={!awardsScroll.canScrollLeft}
                    aria-label="Scroll awards and certifications left"
                  >
                    <FiChevronLeft aria-hidden="true" focusable="false" />
                  </button>
                  <button
                    type="button"
                    className="projects-scroll-btn projects-scroll-btn-right"
                    onClick={() => awardsScroll.scrollByOneCard(1)}
                    disabled={!awardsScroll.canScrollRight}
                    aria-label="Scroll awards and certifications right"
                  >
                    <FiChevronRight aria-hidden="true" focusable="false" />
                  </button>

                  <div
                    className="projects-scroll"
                    ref={awardsScroll.scrollRef}
                    role="list"
                    aria-label="Awards and certifications"
                  >
                    <div className="project-card projects-scroll-item" role="listitem">
                      <ProjectCard
                        isBlog={false}
                        title="Cloud Practitioner (SE)"
                        tags={["Certification"]}
                        demoLink={cloudPractitioner}
                        description={
                          <>
                            <div>Certification credential document.</div>
                          </>
                        }
                      />
                    </div>

                    <div className="project-card projects-scroll-item" role="listitem">
                      <ProjectCard
                        isBlog={false}
                        title="Penetration Tester"
                        tags={["Certification"]}
                        demoLink={penetrationTester}
                        description={
                          <>
                            <div>Certification credential document.</div>
                          </>
                        }
                      />
                    </div>

                    <div className="project-card projects-scroll-item" role="listitem">
                      <ProjectCard
                        isBlog={false}
                        title="Introduction to Cybersecurity"
                        tags={["Certification"]}
                        demoLink={introCybersecurity}
                        description={
                          <>
                            <div>Certification credential document.</div>
                          </>
                        }
                      />
                    </div>

                    <div className="project-card projects-scroll-item" role="listitem">
                      <ProjectCard
                        isBlog={false}
                        title="Introduction to IoT"
                        tags={["Certification"]}
                        demoLink={introIot}
                        description={
                          <>
                            <div>Certification credential document.</div>
                          </>
                        }
                      />
                    </div>

                    <div className="project-card projects-scroll-item" role="listitem">
                      <ProjectCard
                        isBlog={false}
                        title="Introduction to Modern AI"
                        tags={["Certification"]}
                        demoLink={introModernAi}
                        description={
                          <>
                            <div>Certification credential document.</div>
                          </>
                        }
                      />
                    </div>

                    <div className="project-card projects-scroll-item" role="listitem">
                      <ProjectCard
                        isBlog={false}
                        title="I-HAX 2024 Innovation Hackathon"
                        tags={["Award"]}
                        demoLink={iHaxHackathon}
                        description={
                          <>
                            <div>Award / recognition document.</div>
                          </>
                        }
                      />
                    </div>

                    <div className="project-card projects-scroll-item" role="listitem">
                      <ProjectCard
                        isBlog={false}
                        title="I-HAX 2024 Participation"
                        tags={["Participation"]}
                        demoLink={iHaxParticipation}
                        description={
                          <>
                            <div>Participation certificate document.</div>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
