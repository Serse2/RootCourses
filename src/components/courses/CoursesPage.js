import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Form } from "react-bootstrap";

class CoursesPage extends Component {
	state = {
		course: {
			isError: false,
			title: "",
			duration: "5 anni",
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

	handleDelete = (e) => {
		const { index } = e.target.dataset;
		this.props.deleteCourse(index);
		console.log(index);
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (
			this.state.course.title !== "" &&
			this.state.course.title !== "inserisci un corso"
		) {
			this.props.addCourse(this.state.course);
			this.setState({
				course: { ...this.state.course, isError: false },
			});
		} else {
			this.setState({
				course: {
					...this.state.course,
					isError: true,
					title: "inserisci un corso",
				},
			});
		}
	};

	render() {
		let { courses } = this.props;
		let { isError } = this.state.course;
		return (
			<div className='container'>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Control
						className={isError ? "error" : ""}
						type='text'
						name='title'
						value={this.state.course.title}
						onChange={this.handleChange}
					/>
					<button className='btn btn-info mt-3'>Save the course</button>
				</Form>
				<h2>This is your showcase:</h2>
				{courses.map((course, index) => {
					return (
						<div key={index} className='item'>
							<span>{index} </span>
							<span>{course.title}</span>
							<span> | </span>
							<span>{course.duration}</span>
							<span> | </span>
							<span
								className='delete-item'
								data-index={index}
								onClick={this.handleDelete}>
								delete
							</span>
						</div>
					);
				})}
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array,
	addCourse: PropTypes.func,
	deleteCourse: PropTypes.func,
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses,
	};
};

// tutte le azioni che andrò a creare saranno automaticamente disponibili in this.props come funzioni
function mapDispatchToProps(dispatch) {
	return bindActionCreators(courseAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
