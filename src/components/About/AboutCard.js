import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi I’m <span className="purple">Muhammad Iqbal</span>{" "}
            from <span className="purple">Kajang, Selangor</span>.
            <br />
            I’m currently open to work as a{" "}
            <span className="purple">Software Developer</span> and related roles.
            <br />I hold an Degree in Computer Science {" "}
            <span className="purple">(Mobile Computing)</span> and Diploma in{" "}
            <span className="purple">Mathematical Sciences</span> from{" "}
            <span className="purple">UITM</span>.
            <br />
            <br />
            Other than coding, I enjoy hobbies that keep me creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              Playing Games 🎮
            </li>
            <li className="about-activity">
              Badminton🏸 and Soccer⚽
            </li>
            <li className="about-activity">
              Swimming🏊 and Jungle Hiking🥾
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
