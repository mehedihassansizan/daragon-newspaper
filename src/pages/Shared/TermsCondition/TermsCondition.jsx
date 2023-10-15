/* eslint-disable no-unused-vars */
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  return (
    <Container>
      <h1>Terms & Conditions</h1>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <p className="mt-3">Go Back <Link to='/login/register'>Register</Link> </p>
    </Container>
  );
};

export default TermsCondition;
