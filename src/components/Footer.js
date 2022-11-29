import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/Bs";


// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <div className="d-flex align-items-center justify-content-center footer">
      <a href="https://github.com/ramosw1993">
        <h1>
          <BsGithub/>
        </h1>
      </a>
      <a href="https://www.linkedin.com/in/william-ramos-rosario-a06992248/">
        <h1>
          <BsLinkedin/>
        </h1>
      </a>
    </div>
  );
}

export default Footer;