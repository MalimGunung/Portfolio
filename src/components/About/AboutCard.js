import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view about-profile-card">
      <Card.Body className="about-profile-body">
        <div className="about-profile-top">
          <div className="about-profile-title">
            Hi, I’m <span className="purple">Muhammad Iqbal</span>
          </div>
          <div className="about-profile-subtitle">
            Selangor / Kuala Lumpur • Software Developer
          </div>
        </div>

        <div className="about-profile-divider" />

        <div className="about-profile-text">
          I’m currently open to work as a{" "}
          <span className="purple">Software Developer</span> and related roles.
          <br />
          I hold a Degree in Computer Science{" "}
          <span className="purple">(Mobile Computing)</span> and a Diploma in{" "}
          <span className="purple">Mathematical Sciences</span> from{" "}
          <span className="purple">UITM</span>.
        </div>

        <div className="about-profile-section-title">
          Other than coding, I enjoy
        </div>
        <div className="about-hobby-list" role="list">
          <span className="about-hobby-pill" role="listitem">
            Playing Games 🎮
          </span>
          <span className="about-hobby-pill" role="listitem">
            Badminton 🏸
          </span>
          <span className="about-hobby-pill" role="listitem">
            Soccer ⚽
          </span>
          <span className="about-hobby-pill" role="listitem">
            Swimming 🏊
          </span>
          <span className="about-hobby-pill" role="listitem">
            Jungle Hiking 🥾
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
