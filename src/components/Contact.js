import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'name') {
      if (!name) {
        setErrorMessage(`Enter a valid name input `);
      } else {
        setErrorMessage('');
      }
      setName(inputValue);
    } else if (inputType === 'email') {
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
      } else {
        setErrorMessage('');
      }
      setEmail(inputValue);
    } else {
      if (!message) {
        setErrorMessage(`Enter a valid message input `);
      } else {
        setErrorMessage("");
      }
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!name) {
      setErrorMessage(
        `Enter a valid name input `
      );
      return;
    }

    if (!message) {
      setErrorMessage(`Enter a valid message input`);
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <Card body>
    <div className="d-flex justify-content-center flex-column align-items-center ">
      <h1 className="p-3">Contact Page</h1>
      <h3 className="d-flex"> Feel free to reach out to me with the email form below! </h3>
      <Form>
      <Form.Group className="mb-4" controlId="formBasicName">
        <input
          className=""
          value={name}
          name="name"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="text"
          placeholder="Name"
        />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <input
          className=""
          value={email}
          name="email"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="email"
          placeholder="Email"
        />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicMessage">
        <textarea
          className="message"
          value={message}
          name="message"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="text"
          placeholder="Message"
        />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicButton">
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        </Form.Group>
        </Form>
      {errorMessage && (
        <div class="alert alert-warning custom-alert" role="alert">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </Card>
  );

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

export default Contact;