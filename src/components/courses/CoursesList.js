import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

function CoursesList() {
  const { courses, error, loading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    courses.length == 0 && dispatch(loadCourses());
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="text-center">
        <h1 className="display-1">Courses avaible</h1>
        <p>
          Our catalog of all the courses we offer. Browse by topic or difficulty. Sign up today and
          get access to our entire library.
        </p>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((course, index) => {
              const { id, title, author, duration, price } = course;
              return (
                <tr key={index} params={title}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{duration}</td>
                  <td>{price} €</td>
                  <td>
                    <Link to={"./courses/" + course.title}>More details</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <h2 className="text-muted soft-text">Add your Course</h2>
      <Link to="/add-course">Start now &#8594;</Link>
    </>
  );
}

export default CoursesList;
