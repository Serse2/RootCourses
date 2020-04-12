// funzione di redux per creare lo store
import { createStore } from "redux";
// importo tutti i reducer
import rootReducer from "./reducers/index";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
