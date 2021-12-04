// funzione di redux per creare lo store
import { createStore, applyMiddleware } from "redux";
// importo tutti i reducer
import rootReducer from "./reducers/index";
// importo thunk
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store);

export default store;
