import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import '../styles/Navigation.css';

export default function Navigation({ currentPage, handlePageChange }) {
  const linkStyle = { border: '1px #6D599C', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div style={linkStyle}>
          <a href="#header"
                onClick={() => handlePageChange("Header")}
                className={
                  currentPage === "Header"
                    ? "nav-link active btn btn-primary text-reset"
                    : "nav-link btn btn-outline-primary"
                }>About Me</a>
        </div>
        <div style={linkStyle}>
          <a  href="#project"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Project"
                    ? "nav-link active btn btn-primary text-reset"
                    : "nav-link btn btn-outline-primary"
                }>Project</a>
        </div>
        <div style={linkStyle}>
          <a  href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact"
                    ? "nav-link active btn btn-primary text-reset"
                    : "nav-link btn btn-outline-primary"
                }>Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume"
                    ? "nav-link active btn btn-primary text-reset"
                    : "nav-link btn btn-outline-primary"
                }>Resume</a>
        </div>
      </section>
    </nav>
  );
}
