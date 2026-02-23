import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import smartDispatch from "../../Assets/Projects/smart-disptch.png";
import roadCare from "../../Assets/Projects/road-care.png";
import travelDiary from "../../Assets/Projects/travle-diary.png";

function Projects() {
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
    const onScroll = () => updateScrollState();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
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
    const amount = (Number.isFinite(cardWidth) ? cardWidth : 360) + (Number.isFinite(gapValue) ? gapValue : 0);

    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <div className="projects-intro">
          <h2
            className="project-heading"
            style={{ fontSize: "1.75em", marginBottom: "8px" }}
          >
            Professional Projects{" "}
            <strong className="purple">/ Freelance</strong>
          </h2>
          <p className="projects-subtitle" style={{ marginBottom: 0 }}>
            Real-world work, client deliverables, and shipped features.
          </p>
        </div>

        <div className="projects-intro" style={{ marginTop: "26px" }}>
          <h2 className="project-heading" style={{ fontSize: "1.75em", marginBottom: "8px" }}>
            University Projects <strong className="purple">(Academic)</strong>
          </h2>
          <p className="projects-subtitle" style={{ marginBottom: 0 }}>
            Selected coursework and academic builds.
          </p>
        </div>

        <div className="projects-scroll-wrap">
          <button
            type="button"
            className="projects-scroll-btn projects-scroll-btn-left"
            onClick={() => scrollByOneCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll projects left"
          >
            <FiChevronLeft aria-hidden="true" focusable="false" />
          </button>
          <button
            type="button"
            className="projects-scroll-btn projects-scroll-btn-right"
            onClick={() => scrollByOneCard(1)}
            disabled={!canScrollRight}
            aria-label="Scroll projects right"
          >
            <FiChevronRight aria-hidden="true" focusable="false" />
          </button>

          <div className="projects-scroll" ref={scrollRef} role="list" aria-label="Projects">
            <div className="project-card projects-scroll-item" role="listitem">
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
          </div>
            <div className="project-card projects-scroll-item" role="listitem">
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
          </div>
            <div className="project-card projects-scroll-item" role="listitem">
            <ProjectCard
              imgPath={travelDiary}
              isBlog={false}
              title="Travel Diary App"
              tags={["Flutter", "Firebase Auth", "Firestore", "Maps", "Biometric"]}
              description={
                <>
                  <div>
                    This project is a Flutter mobile app that lets users record
                    travel journals with title, notes, date, location (picked on
                    a map), images, and a rating. It uses Firebase for
                    authentication and Firestore to store journal entries.
                  </div>
                  <br />
                  <div>Key Features</div>
                  <ul>
                    <li>Email/password authentication (Firebase Auth)</li>
                    <li>Optional biometric login via local_auth</li>
                    <li>
                      Add/edit/delete travel journal entries 
                    </li>
                    <li>
                      Pick location on interactive map (OpenStreetMap via
                      flutter_map)
                    </li>
                    <li>
                      Add photos via camera/gallery 
                    </li>
                    <li>Search and list your journal entries</li>
                  </ul>
                </>
              }
              ghLink="https://github.com/MalimGunung/travel-diary-app"
            />
          </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
