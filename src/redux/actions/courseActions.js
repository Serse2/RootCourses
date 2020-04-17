import * as type from "./actionType";
import { getCourses } from "../../api/coursesApi";

export function addCourse(course) {
	return {
		type: type.ADD_COURSE,
		course: course,
	};
}

export function deleteCourse(index) {
	return {
		type: type.DELETE_COURSE,
		index: index,
	};
}

export function loadCoursesSuccess(courses) {
	return {
		type: type.LOAD_COURSES_SUCCESS,
		courses,
	};
}

export function loadCourses() {
	return async function (dispatch) {
		const data = await getCourses();
		dispatch(loadCoursesSuccess(data));
	};
}
