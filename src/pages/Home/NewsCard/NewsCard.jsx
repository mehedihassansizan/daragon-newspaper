/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaBookmark,
  FaEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, rating, total_view } = news;

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-3 flex-grow-1 pt-3">
          <h6 className="mb-0">{author?.name}</h6>
          <p>{moment(author?.published_date).format("yyyy-MM-d")}</p>
        </div>
        <div className="">
          <FaBookmark /> <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="mb-3">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="mt-3">
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link
                className="text-decoration-none text-warning"
                to={`/news/${_id}`}
              >
                See More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 d-flex">
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(rating?.number || 0)}
            readOnly
          />
          <span className="ps-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
