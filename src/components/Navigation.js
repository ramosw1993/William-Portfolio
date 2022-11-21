import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <div className="nav-bar">
      <Nav fill variant="pills" className="justify-content-end" defaultActiveKey="/home">
        <Nav.Item className="nav-item">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navigation;
