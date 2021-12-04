import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCourseReducer } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import Loader from "../common/Loader";

function CoursesPage() {
  let history = useHistory();
  const { loading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [course, setCourse] = useState({
    id: 0,
    title: "",
    author: "",
    duration: 0,
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // take a copy of state and modify only the arguments we want.
    const newCourse = { ...course, [name]: value };
    // set the state with the new object created and assing it at the current state.
    setCourse(newCourse);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCourseReducer(course));
    history.push("/courses");
  };

  let { title, author, duration, price, description } = course;
  return (
    <>
      {loading && <Loader />}
      <div className="container">
        <h2>Courses</h2>
        <h3>Add new course</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" name="title" value={title} onChange={handleChange} required />

            <Form.Label>Author:</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={author}
              onChange={handleChange}
              required
            />

            <Form.Label>Duration:</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              value={duration}
              onChange={handleChange}
              required
            />

            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              required
            />

            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <button className="btn btn-info mt-3">Save the course</button>
        </Form>
      </div>
    </>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array,
  addCourse: PropTypes.func,
  deleteCourse: PropTypes.func,
  history: PropTypes.object,
  push: PropTypes.func,
};

export default CoursesPage;
