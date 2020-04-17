import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router";

import { Jumbotron, Button, Badge } from "react-bootstrap";

const SingleCourse = ({ courses }) => {
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
								<Badge variant='secondary'>Author</Badge>
							</h2>
							<div>Total price: {price}€</div>
							<p>
								<Button variant='primary'>Do it now!</Button>
							</p>
						</Jumbotron>
					);
				}
			})}
		</div>
	);
};

SingleCourse.propTypes = {
	courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses,
	};
};

export default connect(mapStateToProps)(SingleCourse);
