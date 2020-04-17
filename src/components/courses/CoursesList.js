import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function CoursesList({ courses, loadCourses }) {
	if (courses.length === 0) {
		useEffect(() => {
			loadCourses();
		}, []);
	}

	return (
		<>
			<div className='text-center'>
				<h1 className='display-1'>Courses avaible</h1>
				<p>
					Our catalog of all the courses we offer. Browse by topic or
					difficulty. Sign up today and get access to our entire library.
				</p>
			</div>
			<Table striped bordered hover variant='dark'>
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
					{courses.map((course, index) => {
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
		</>
	);
}

CoursesList.propTypes = {
	courses: PropTypes.array.isRequired,
	loadCourses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses,
	};
};

const mapDispatchToProps = {
	loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
