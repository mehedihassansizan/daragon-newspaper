/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";


const Header = () => {
  return (
    <Container className="mt-4 mb-5">
      <div className="text-center">
        <img src={logo} alt="" />
        <h5 className="text-secondary">Journalism Without Fear or Favour</h5>
        <p className="text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex bg-light p-2">
        <Button variant="danger">Latest</Button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <div className="mt-4 p-0">
        <Navbar collapseOnSelect expand="lg" className="">
          <Container className="p-0">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home </Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                  <Button variant="secondary" className="px-4">
                    Latest
                  </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
