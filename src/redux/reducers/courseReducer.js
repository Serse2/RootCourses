import * as type from "../actions/actionType";

export default function courseReducer(state = [], action) {
	switch (action.type) {
		case type.ADD_COURSE:
			return [...state, { ...action.course }];

		case type.DELETE_COURSE:
			return [...state.filter((v, i) => i != action.index)];

		case type.LOAD_COURSES_SUCCESS:
			return [...state, ...action.courses];

		default:
			return state;
	}
}
