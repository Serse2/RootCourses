import * as type from "./actionType";

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
