import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import headerImg from '../cntower.jpg';
import img from '../IMG_3937 .jpg';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Header(props) {
  return (
    <div className="mb-2">
    <Card className="bg-dark text-white">
      <Card.Img src={headerImg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="title-header">William Ramos Rosario</Card.Title>
        <Container>
        <Card.Text className="paragraph-header">
          Full Stack Developer/ Customer Experience Enthusiast/ Toronto Native
        </Card.Text>
        <Col sm={12}>
          <Card.Img src={img} alt="Card image" className="will-pic"/>
          </Col>
          <Col sm={4}><Button variant="dark" size="lg" className="button-resume">
          Resume
        </Button>
        </Col>
    </Container>
      </Card.ImgOverlay>
    </Card>
    </div>
  );
}

export default Header;