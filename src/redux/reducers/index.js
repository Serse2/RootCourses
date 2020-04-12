// funzione per combinare tutti i reducer
import { combineReducers } from "redux";
// importo i reducer creati
import courses from "./courseReducer";
import comics from "./marvelReducer";

const rootReducer = combineReducers({
	courses: courses,
	comics: comics,
});

export default rootReducer;
