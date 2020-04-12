import * as type from "../actions/actionType";

export default function marvelReducer(state = [], action) {
	switch (action.type) {
		case type.LOAD_COMICS_SUCCESS:
			return [...state, ...action.comics];
		default:
			return state;
	}
}
