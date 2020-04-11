import React from "react";
import { Route, Switch } from "react-router-dom";

// importo i miei componenti
import Header from "./common/Header";
import About from "./about/AboutPage";
import Home from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/courses' component={CoursesPage} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
};

export default App;
