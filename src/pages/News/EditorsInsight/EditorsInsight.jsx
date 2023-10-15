/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from '../../../assets/1.png'
import sec from '../../../assets/2.png'
import third from '../../../assets/3.png'

const EditorsInsight = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
                <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={sec} />
            <Card.Body>
                <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
                <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
};

export default EditorsInsight;
