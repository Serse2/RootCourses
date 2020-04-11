import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// importo lo stile da bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import style da index.css
import "./index.css";

// import the store
import store from "./redux/store";

import App from "./components/App";

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app")
);
