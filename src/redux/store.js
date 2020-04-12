// funzione di redux per creare lo store
import { createStore, applyMiddleware } from "redux";
// importo tutti i reducer
import rootReducer from "./reducers/index";
// importo thunk
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
