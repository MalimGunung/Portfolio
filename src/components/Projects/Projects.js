import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartDispatch from "../../Assets/Projects/SmartDispatch.png";
import roadCare from "../../Assets/Projects/RaodCare1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="projects-intro">
          <h1 className="project-heading" style={{ marginBottom: "10px" }}>
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p className="projects-subtitle">
            A quick snapshot of what I've been building lately.
          </p>
        </div>

        <Row className="projects-grid g-4 justify-content-center">
          <Col xs={12} md={6} lg={5} className="project-card">
            <ProjectCard
              imgPath={smartDispatch}
              isBlog={false}
              title="Smart Dispatch"
              tags={["Flutter", "OCR", "Firestore", "Routing", "Maps"]}
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
          <Col xs={12} md={6} lg={5} className="project-card">
            <ProjectCard
              imgPath={roadCare}
              isBlog={false}
              title="RoadCare"
              tags={["Flutter", "Firebase", "FCM", "Reporting"]}
              description={
                <>
                  <div>
                    Road Damage Report System is a Flutter mobile app for
                    reporting and notifying users about road damage (potholes,
                    cracks, etc.). The project includes client-side Flutter code
                    and server-side notification helper logic (FCM via a Google
                    service account).
                  </div>
                  <br />
                  <div>
                    Purpose: Let users submit road damage reports and broadcast
                    notifications to subscribed users via Firebase Cloud
                    Messaging (FCM)
                  </div>
                </>
              }
              ghLink="https://github.com/MalimGunung/RoadCare"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
