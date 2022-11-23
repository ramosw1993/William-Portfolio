import React from "react";
import resume from "../assets/resume.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/Resume.css";

function Resume() {
  return (
    <Card>
      <Card.Body>
        <h1 className="h1-class">Resume</h1>
        <img className="resume-pic" src={resume} alt="Resume" />
        <Button variant="primary">
          <a href={resume} download>
            Download my resume
          </a>
          Download my resume!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Resume;
