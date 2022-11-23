import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import headerImg from "../assets/cntower.jpg";
import img from "../assets/IMG_3937 .jpg";
import "../styles/Header.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <div className="mb-2">
      <Card className="bg-dark text-white">
        <Card.Img src={headerImg} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="title-header">
            William Ramos Rosario
          </Card.Title>
          <Container>
            <Col sm={8}>
              <Card.Text className="paragraph-header">
                Full Stack Developer leveraging my background in a Customer
                Service Representative role in an Office Administration
                environment. Seeking to provide unique perspectives on technical
                development competences, as well as continuing to lean into my
                passion of providing world class service to all persons.
              </Card.Text>
            </Col>
            <Col sm={12}>
              <Card.Img src={img} alt="Card image" className="will-pic" />
            </Col>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Header;
