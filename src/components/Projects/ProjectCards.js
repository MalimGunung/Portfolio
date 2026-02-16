import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          className="project-card-image"
        />
      ) : null}
      <Card.Body className="project-card-body">
        <Card.Title>{props.title}</Card.Title>
        {Array.isArray(props.tags) && props.tags.length > 0 ? (
          <div className="project-card-tags">
            {props.tags.map((tag) => (
              <span key={tag} className="highlight-badge">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <Card.Text style={{ textAlign: "justify" }} className="project-card-text">
          {props.description}
        </Card.Text>
        <div className="project-card-actions">
          {props.ghLink ? (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-btn project-card-btn-github"
            >
              <BsGithub />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          ) : null}

          {!props.isBlog && props.demoLink ? (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-btn project-card-btn-demo"
            >
              <CgWebsite />
              {"Demo"}
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
