import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: yellow; }
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
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">HarshaKart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/auth">Signin/signup <i class="fa fa-user" aria-hidden="true"></i></Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/cart">Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)