import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// importo i miei componenti
import Header from "./common/Header";
import Footer from "./common/Footer";
import About from "./about/AboutPage";
import Home from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import CoursesList from "./courses/CoursesList";
import MarvelPage from "./marvel/MarvelPage";
import SingleCourse from "./courses/SingleCourse";
import CoursesPage from "./courses/CoursesPage";

const App = () => {
	return (
		<Fragment>
			<Header />
			<main role='main' className='container'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/add-course' component={CoursesPage} />
					<Route path='/courses/:slug' component={SingleCourse} />
					<Route path='/courses' component={CoursesList} />
					<Route path='/marvel' component={MarvelPage} />
					<Route component={PageNotFound} />
				</Switch>
			</main>
			<Footer />
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		state,
	};
};

export default connect(mapStateToProps)(App);
