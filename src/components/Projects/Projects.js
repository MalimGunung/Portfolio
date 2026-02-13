import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartDispatch from "../../Assets/Projects/SmartDispatch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartDispatch}
              isBlog={false}
              title="Smart Dispatch"
              description={
                <>
                  <div>
                    Smart Dispatch is a Flutter mobile application that helps
                    dispatchers and drivers scan parcel labels using OCR,
                    convert them to geo-coordinates, and plan optimized
                    multi-stop delivery routes with map-based navigation.
                  </div>
                  <br />
                  <div>Key user flows:</div>
                  <ul>
                    <li>Scan parcel</li>
                    <li>Confirm address</li>
                    <li>Save to Firestore</li>
                    <li>Generate optimized route</li>
                    <li>Navigate and mark deliveries complete</li>
                    <li>Archive delivery history</li>
                  </ul>
                </>
              }
              ghLink="https://github.com/MalimGunung/Smart-Dispatch"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
