import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
	const activeStyle = { color: "#F15B2A" };

	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<NavLink to='/'>RootCourse</NavLink>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav>
					<NavLink to='/' activeStyle={activeStyle} className='nav-link' exact>
						Home
					</NavLink>
					<NavLink to='/courses' activeStyle={activeStyle} className='nav-link'>
						Courses
					</NavLink>
					<NavLink to='/about' activeStyle={activeStyle} className='nav-link'>
						About
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
