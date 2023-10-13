/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <Container className="">
      <h3 className="">Login With</h3>
      <Button variant="primary" className="w-100 mt-3">
        <FaGoogle /> Login with google
      </Button>
      <Button variant="secondary" className="w-100 mt-3">
        <FaGithub /> Login with github
      </Button>
      <div className="mt-4">
        <h3>Find Us On</h3>
        <ListGroup className="mt-4">
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> InstaGram</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div className="mt-4 container-background" > 
        <div className="text-white text-center details px-2">
            <h4>Create an Amazing Newspaper</h4>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button variant="danger">Learn more </Button>
        </div>
      </div>
    </Container>
  );
};

export default RightNav;
