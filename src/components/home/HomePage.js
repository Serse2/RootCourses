import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className='jumbotron'>
			<h1>Pluralist Administration</h1>
			<p>React, Redux ultra responsive web app</p>
			<Link to='about' className='btn btn-primary btn-lg'>
				learn more
			</Link>
		</div>
	);
};

export default HomePage;
