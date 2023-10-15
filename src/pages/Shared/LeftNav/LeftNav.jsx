/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import sec from "../../../assets/2.png";
import third from "../../../assets/3.png";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>All Caterogy</h2>
      <div className="mt-4 ms-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-secondary"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <Row xs={1} md={1} lg={1} className="g-4 mb-4">
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
    </div>
  );
};

export default LeftNav;
