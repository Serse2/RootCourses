// funzione per combinare tutti i reducer
import { combineReducers } from "redux";
// importo i reducer creati
import courses from "./courseReducer";

const rootReducer = combineReducers({
	courses: courses,
});

export default rootReducer;
