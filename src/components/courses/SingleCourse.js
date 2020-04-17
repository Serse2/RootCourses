import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router";

const SingleCourse = ({ courses }) => {
	let { slug } = useParams();
	return (
		<div>
			Now showing post {slug}
			{courses.map((course) => {
				if (course.title === slug) {
					return (
						<div>
							<h1>{course.title}</h1>
							<h2>{course.author}</h2>
							<h3>{course.price}</h3>
						</div>
					);
				}
			})}
		</div>
	);
};

SingleCourse.propTypes = {
	courses: PropTypes.array.isRequired,
	loadCourses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses,
	};
};

export default connect(mapStateToProps)(SingleCourse);
