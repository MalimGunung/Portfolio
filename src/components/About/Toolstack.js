import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import clickup from "../../Assets/TechIcons/clickup.svg";
import traeAi from "../../Assets/TechIcons/trae_ai.svg";
import n8n from "../../Assets/TechIcons/n8n.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import GitHub from "../../Assets/TechIcons/github.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Cypress from "../../Assets/TechIcons/cypress.svg";
import AndroidStudio from "../../Assets/TechIcons/androidstudio.svg";
import Figma from "../../Assets/TechIcons/figma.svg";
import Jira from "../../Assets/TechIcons/jira.svg";
import MicrosoftPowerBI from "../../Assets/TechIcons/microsoft-power-bi.svg";
import KaliLinux from "../../Assets/TechIcons/kalilinux.svg";
import Nmap from "../../Assets/TechIcons/nmap.svg";
import Metasploit from "../../Assets/TechIcons/metasploit.svg";
import BurpSuite from "../../Assets/TechIcons/burpsuite.svg";

function Toolstack() {
  const items = [
    { src: vsCode, alt: "vsCode", label: "Vs Code" },
    { src: Git, alt: "Git", label: "Git" },
    { src: GitHub, alt: "GitHub", label: "GitHub" },
    { src: Docker, alt: "Docker", label: "Docker" },
    { src: Cypress, alt: "Cypress", label: "Cypress" },
    { src: AndroidStudio, alt: "Android Studio", label: "Android Studio" },
    { src: Figma, alt: "Figma", label: "Figma" },
    { src: Jira, alt: "Jira", label: "Jira" },
    { src: MicrosoftPowerBI, alt: "Power BI", label: "Power BI" },
    { src: clickup, alt: "ClickUp", label: "ClickUp" },
    { src: traeAi, alt: "Trae AI", label: "Trae AI" },
    { src: n8n, alt: "n8n", label: "n8n" },
    { src: KaliLinux, alt: "Kali Linux", label: "Kali Linux" },
    { src: Nmap, alt: "Nmap", label: "Nmap" },
    { src: Metasploit, alt: "Metasploit", label: "Metasploit" },
    { src: BurpSuite, alt: "Burp Suite", label: "Burp Suite" },
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
