import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Cypress from "../../Assets/TechIcons/cypress.svg";
import Dart from "../../Assets/TechIcons/dart.svg";
import Figma from "../../Assets/TechIcons/figma.svg";
import GoogleCloud from "../../Assets/TechIcons/google-cloud.svg";
import Jira from "../../Assets/TechIcons/jira.svg";
import Json from "../../Assets/TechIcons/json.svg";
import MicrosoftPowerBI from "../../Assets/TechIcons/microsoft-power-bi.svg";
import AndroidStudio from "../../Assets/TechIcons/androidstudio.svg";
import BurpSuite from "../../Assets/TechIcons/burpsuite.svg";
import Flutter from "../../Assets/TechIcons/flutter.svg";
import GitHub from "../../Assets/TechIcons/github.svg";
import KaliLinux from "../../Assets/TechIcons/kalilinux.svg";
import Metasploit from "../../Assets/TechIcons/metasploit.svg";
import Nmap from "../../Assets/TechIcons/nmap.svg";

function Techstack() {
  const items = [
    { kind: "img", src: C, alt: "C++", label: "C++" },
    { kind: "img", src: Javascript, alt: "javascript", label: "Javascript" },
    { kind: "img", src: Typescript, alt: "typescript", label: "Javascript" },
    { kind: "img", src: Node, alt: "node", label: "Node.Js" },
    { kind: "img", src: ReactIcon, alt: "react", label: "React.Js" },
    { kind: "img", src: Mongo, alt: "mongoDb", label: "Mongo DB" },
    { kind: "icon", Icon: SiNextdotjs, label: "Next.js" },
    { kind: "img", src: Git, alt: "git", label: "Git" },
    { kind: "img", src: Firebase, alt: "firebase", label: "Firebase" },
    { kind: "img", src: Docker, alt: "docker", label: "Docker" },
    { kind: "img", src: SQL, alt: "SQL", label: "Postgresql" },
    { kind: "img", src: Python, alt: "Python", label: "Python" },
    { kind: "img", src: Java, alt: "java", label: "Java" },
    { kind: "img", src: Tailwind, alt: "tailwind", label: "Tailwind CSS" },
    {
      kind: "img",
      src: AWS,
      alt: "AWS",
      label: "AWS",
      imageClassName: "tech-icon-images",
    },
    { kind: "img", src: Cypress, alt: "Cypress", label: "Cypress" },
    { kind: "img", src: Dart, alt: "Dart", label: "Dart" },
    { kind: "img", src: Flutter, alt: "Flutter", label: "Flutter" },
    { kind: "img", src: AndroidStudio, alt: "Android Studio", label: "Android Studio" },
    { kind: "img", src: Figma, alt: "Figma", label: "Figma" },
    { kind: "img", src: Jira, alt: "Jira", label: "Jira" },
    { kind: "img", src: GoogleCloud, alt: "Google Cloud", label: "Google Cloud" },
    { kind: "img", src: MicrosoftPowerBI, alt: "Microsoft Power BI", label: "Power BI" },
    { kind: "img", src: Json, alt: "JSON", label: "JSON" },
    { kind: "img", src: GitHub, alt: "GitHub", label: "GitHub" },
    { kind: "img", src: KaliLinux, alt: "Kali Linux", label: "Kali Linux" },
    { kind: "img", src: Nmap, alt: "Nmap", label: "Nmap" },
    { kind: "img", src: Metasploit, alt: "Metasploit", label: "Metasploit" },
    { kind: "img", src: BurpSuite, alt: "Burp Suite", label: "Burp Suite" },
  ];

  return (
    <Row className="about-icon-grid">
      {items.map((item, index) => (
        <Col
          key={`${item.label}-${index}`}
          xs={6}
          sm={4}
          md={4}
          lg={4}
          className="tech-icons reveal"
          data-reveal
          style={{ "--reveal-delay": `${Math.min(index * 40, 320)}ms` }}
        >
          {item.kind === "img" ? (
            <img
              src={item.src}
              alt={item.alt}
              className={item.imageClassName}
            />
          ) : (
            <item.Icon fontSize={"24px"} />
          )}
          <div className="tech-icons-text">{item.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
