import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: orange; }
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
  .view {
    borderBottomWidth: 1
  }
`;
const Categories = () => {
    return (
        
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand>All Categories</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>Fruits&Vegetables</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>Foodgrains,Oil&Masala</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>Bakery,Cakes&Dairy</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>Beverages</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>Snacks&Branded Foods</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>Eggs,Meet&Fish</Nav.Item>
                    </Nav>
                
                </Navbar.Collapse>
                </Navbar>
            </Styles>
        
    )
};

export default Categories;