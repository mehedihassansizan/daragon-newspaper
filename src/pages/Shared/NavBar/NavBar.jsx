/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error =>{
        console.log(error)
      })
    }

  return (
    <Container>
      <div className="mb-5 p-0">
        <Navbar collapseOnSelect expand="lg" className="">
          <Container className="p-0">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link className="text-decoration-none text-secondary" to="/">
                  Home
                </Link>
                <Link
                  className="text-decoration-none text-secondary px-2"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="text-decoration-none text-secondary"
                  to="/career"
                >
                  Career
                </Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle
                    style={{
                      fontSize: "2rem",
                      marginRight: "15px",
                      marginTop: "5px",
                    }}
                  />
                )}
                {user ? (
                  <Button onClick={handleLogOut} variant="secondary" className="px-4">
                  Logout
                </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary" className="px-4">
                      Login
                    </Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavBar;
