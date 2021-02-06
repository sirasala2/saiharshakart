import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: lightblue; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000;
    &:hover { color: red; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #000;
    &:hover { color: red; }
  }
  .form-center {
    position: absolute !important;
    
    left: 25%;
    right: 25%;
  }
`;
const Footer = () => {
  return (
    <Styles>

      <Navbar expand="lg" className="form-center">
        <Navbar.Brand >Terms and Conditions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>policy</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </Styles>
  )
};

export default Footer;