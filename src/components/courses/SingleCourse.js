import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { Jumbotron, Button, Badge } from "react-bootstrap";

const SingleCourse = () => {
  const { courses } = useSelector((state) => state.courses);
  let { slug } = useParams();
  return (
    <div>
      {courses.map((course, index) => {
        if (course.title === slug) {
          const { title, author, price, description } = course;
          return (
            <Jumbotron key={index}>
              <h1>{title}</h1>
              <div>Description:</div>
              <p>{description}</p>
              <h2>
                {author}
                <Badge variant="secondary">Author</Badge>
              </h2>
              <div>Total price: {price}€</div>
              <p>
                <Button variant="primary">Do it now!</Button>
              </p>
            </Jumbotron>
          );
        }
      })}
    </div>
  );
};

export default SingleCourse;
