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
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Dart from "../../Assets/TechIcons/dart.svg";
import GoogleCloud from "../../Assets/TechIcons/google-cloud.svg";
import Flutter from "../../Assets/TechIcons/flutter.svg";

function Techstack() {
  const items = [
    { kind: "img", src: C, alt: "C++", label: "C++" },
    { kind: "img", src: Javascript, alt: "JavaScript", label: "JavaScript" },
    { kind: "img", src: Typescript, alt: "TypeScript", label: "TypeScript" },
    { kind: "img", src: Python, alt: "Python", label: "Python" },
    { kind: "img", src: Java, alt: "Java", label: "Java" },
    { kind: "img", src: Dart, alt: "Dart", label: "Dart" },
    { kind: "img", src: Node, alt: "Node.js", label: "Node.js" },
    { kind: "img", src: ReactIcon, alt: "React", label: "React" },
    { kind: "icon", Icon: SiNextdotjs, label: "Next.js" },
    { kind: "img", src: Tailwind, alt: "Tailwind CSS", label: "Tailwind CSS" },
    { kind: "img", src: Flutter, alt: "Flutter", label: "Flutter" },
    { kind: "img", src: Mongo, alt: "MongoDB", label: "MongoDB" },
    { kind: "img", src: SQL, alt: "PostgreSQL", label: "PostgreSQL" },
    { kind: "img", src: Firebase, alt: "firebase", label: "Firebase" },
    {
      kind: "img",
      src: AWS,
      alt: "AWS",
      label: "AWS",
      imageClassName: "tech-icon-images",
    },
    { kind: "img", src: GoogleCloud, alt: "Google Cloud", label: "Google Cloud" },
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
