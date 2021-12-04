import * as type from "../actions/actionType";
const initialState = {
  courses: [],
  error: false,
  loading: false,
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case type.ADD_COURSE:
      return { ...state, courses: [...state.courses, action.course], error: false, loading: false };

    case type.DELETE_COURSE:
      return { ...state, courses: state.courses.filter((course) => course.id != action.index) };

    case "SET_PENDING":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case type.LOAD_COURSES_SUCCESS:
      return { ...state, courses: action.courses, loading: false, error: false };

    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return initialState;
  }
}
