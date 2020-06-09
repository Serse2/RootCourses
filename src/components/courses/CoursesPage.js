import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Form } from "react-bootstrap";

class CoursesPage extends Component {
	state = {
		course: {
			id: 0,
			title: "",
			author: "",
			duration: 0,
			price: 0,
			description: "",
		},
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		// take a copy of state and modify only the arguments we want.
		const course = { ...this.state.course, [name]: value };
		// set the state with the new object created and assing it at the current state.
		this.setState({
			course: course,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(history);

		this.props.history.push("/courses");
	};

	render() {
		let { courses } = this.props;
		let { title, author, duration, price, description } = this.state.course;
		return (
			<div className='container'>
				<h2>Courses</h2>
				<h3>Add new course</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Label>Id:</Form.Label>
						<Form.Control
							type='number'
							name='id'
							value={courses.length + 1}
							onChange={this.handleChange}
						/>

						<Form.Label>Title:</Form.Label>
						<Form.Control
							type='text'
							name='title'
							value={title}
							onChange={this.handleChange}
						/>

						<Form.Label>Author:</Form.Label>
						<Form.Control
							type='text'
							name='author'
							value={author}
							onChange={this.handleChange}
						/>

						<Form.Label>Duration:</Form.Label>
						<Form.Control
							type='number'
							name='duration'
							value={duration}
							onChange={this.handleChange}
						/>

						<Form.Label>Price</Form.Label>
						<Form.Control
							type='number'
							name='price'
							value={price}
							onChange={this.handleChange}
						/>

						<Form.Label>Description:</Form.Label>
						<Form.Control
							as='textarea'
							name='description'
							value={description}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<button className='btn btn-info mt-3'>Save the course</button>
				</Form>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array,
	addCourse: PropTypes.func,
	deleteCourse: PropTypes.func,
	history: PropTypes.object,
	push: PropTypes.func,
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses,
	};
};

// tutte le azioni che andrò a creare saranno automaticamente disponibili in this.props come funzioni
// definizione di mapDispatchToProps mediante bindActionCreators
function mapDispatchToProps(dispatch) {
	return bindActionCreators(courseAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
