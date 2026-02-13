import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import clickup from "../../Assets/TechIcons/clickup.svg";
import traeAi from "../../Assets/TechIcons/trae_ai.svg";
import n8n from "../../Assets/TechIcons/n8n.svg";

function Toolstack() {
  const items = [
    { src: macOs, alt: "macOs", label: "Mac Os" },
    { src: vsCode, alt: "vsCode", label: "Vs Code" },
    { src: clickup, alt: "ClickUp", label: "ClickUp" },
    { src: traeAi, alt: "Trae AI", label: "Trae AI" },
    { src: n8n, alt: "n8n", label: "n8n" },
  ];

  return (
    <Row className="about-icon-grid">
      {items.map((item, index) => (
        <Col
          key={item.label}
          xs={6}
          sm={4}
          md={3}
          className="tech-icons reveal"
          data-reveal
          style={{ "--reveal-delay": `${index * 60}ms` }}
        >
          <img src={item.src} alt={item.alt} className="tech-icon-images" />
          <div className="tech-icons-text">{item.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
