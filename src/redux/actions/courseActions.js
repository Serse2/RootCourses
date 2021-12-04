import * as type from "./actionType";
import { getCourses, postCourse } from "../../api/coursesApi";

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

export function setPending() {
  return {
    type: "SET_PENDING",
  };
}
export function setError() {
  return {
    type: "SET_ERROR",
  };
}

export function loadCourses() {
  return async function (dispatch) {
    dispatch(setPending());
    try {
      const data = await getCourses();
      setTimeout(() => {
        dispatch(loadCoursesSuccess(data));
      }, 2000);
    } catch (error) {
      dispatch(setError());
      console.log(error);
    }
  };
}

export function postCourseReducer(data) {
  return async function (dispatch) {
    dispatch(setPending());
    try {
      const course = await postCourse(data);
      setTimeout(() => {
        dispatch(addCourse(course));
      }, 2000);
    } catch (error) {
      dispatch(setError());
      console.log(error);
    }
  };
}
