import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const sectionRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio contact${name ? ` from ${name}` : ""}`;
    const bodyLines = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      "",
      message,
    ].filter(Boolean);

    const body = bodyLines.join("\n");
    return `mailto:iqbaldaud16@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [email, message, name]);

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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    const targets = root.querySelectorAll("[data-reveal]");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Particle />
      <Container ref={sectionRef} fluid className="contact-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <div
                data-reveal
                className="contact-hero reveal"
                style={{ "--reveal-delay": "0ms" }}
              >
                <h1 className="contact-title">
                  Let’s <strong className="purple">Connect</strong>
                </h1>
                <p className="contact-subtitle">
                  Open to opportunities, collaborations, and interesting
                  projects.
                </p>
                <div className="contact-title-divider" />
              </div>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center contact-grid">
            <Col lg={5} xl={4}>
              <div
                data-reveal
                className="contact-card reveal"
                style={{ "--reveal-delay": "80ms" }}
              >
                <h2 className="contact-card-title">Direct</h2>
                <a
                  className="contact-link"
                  href={mailtoHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail style={{ marginBottom: "2px" }} />
                  <span className="contact-link-text">
                    iqbaldaud16@gmail.com
                  </span>
                </a>

                <a className="contact-link" href="tel:01128023380">
                  <AiOutlinePhone style={{ marginBottom: "2px" }} />
                  <span className="contact-link-text">01128023380</span>
                </a>

                <div className="contact-social">
                  <a
                    className="contact-social-btn"
                    href="https://github.com/MalimGunung"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    className="contact-social-btn"
                    href="https://www.linkedin.com/in/muhammad-iqbal-daud-9580b0343/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>

                <Button
                  className="contact-primary-btn"
                  href={mailtoHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Email Me
                </Button>
              </div>
            </Col>

            <Col lg={7} xl={5}>
              <div
                data-reveal
                className="contact-card reveal"
                style={{ "--reveal-delay": "140ms" }}
              >
                <h2 className="contact-card-title">Send a message</h2>
                <form
                  className="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(mailtoHref, "_blank", "noopener,noreferrer");
                  }}
                >
                  <Row className="g-3">
                    <Col md={6}>
                      <label className="contact-label" htmlFor="contact-name">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        className="form-control contact-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </Col>
                    <Col md={6}>
                      <label className="contact-label" htmlFor="contact-email">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className="form-control contact-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </Col>
                    <Col md={12}>
                      <label className="contact-label" htmlFor="contact-message">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        className="form-control contact-input"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project..."
                      />
                    </Col>
                    <Col md={12} className="d-flex gap-2 flex-wrap">
                      <Button
                        type="submit"
                        className="contact-primary-btn"
                        disabled={!message.trim()}
                      >
                        Send
                      </Button>
                      <Button
                        type="button"
                        className="contact-secondary-btn"
                        onClick={() => {
                          setName("");
                          setEmail("");
                          setMessage("");
                        }}
                      >
                        Clear
                      </Button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Contact;
