import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "../styles/Project.css";
import musicImg from "../assets/musichub.png";
import jobImg from "../assets/Screenshot 2022-11-22 at 9.07.15 AM.png";
import burger from "../assets/Screenshot 2022-11-28 at 8.35.02 PM.png";
import horiseon from "../assets/horiseon.png";
import noteTaker from "../assets/note-taker.png";
import teamProfile from "../assets/team-profile-gen.png";

function Project() {
  return (
    <div className="side-by-side">
      <Container fluid="lg">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col lg>
            <Carousel variant="dark">
              <Carousel.Item className="slide">
                <a href="https://iva416.github.io/MusicHub/">
                  <img
                    className="d-block w-100"
                    src={musicImg}
                    alt="MusicHub"
                  />
                </a>
                <Carousel.Caption>
                  <h5>Team Project MusicHub</h5>
                  <p>
                    Social platform where music fans are able to support their
                    favorite artists.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <a href="https://get-a-job.herokuapp.com/">
                  <img className="d-block w-100" src={jobImg} alt="Get A Job" />
                </a>
                <Carousel.Caption>
                  <h5>Team Project Get A Job</h5>
                  <p>
                    Get A Job is all about networking and creating opportunities
                    for new employees and or unemployed people looking for a
                    place to start.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <a href="https://will-b-hangry.herokuapp.com/">
                <img
                  className="d-block w-100"
                  src={burger}
                  alt="burger"
                />
                </a>
                <Carousel.Caption>
                  <h5>Project 3 coming soon</h5>
                  <p>Will be available starting December.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row className="cards">
          <Col md>
            <a href="https://ramosw1993.github.io/Challenge-Horiseon/">
              <img src={horiseon} alt="Horiseon refactor" />
            </a>
          </Col>
          <Col md>
            <a href="https://ramosw1993.github.io/New-Note-Taker/">
              <img src={noteTaker} alt="Note taker" />
            </a>
          </Col>
          <Col md>
            <a href="https://github.com/ramosw1993/Team-Profile-Generator">
              <img src={teamProfile} alt="Team profile" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
