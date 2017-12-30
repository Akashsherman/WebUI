import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


export default function NavigationBar(props) {
	return (

		<nav className="navbar navbar-expand-lg navbar-dark bg-success row">
			<div>
				<a className="navbar-brand" href="#">
					<img className="float-left img-fluid-header" src="public/assets/logo_white_b.jpg" alt="Home" />
					<button className="navbar-toggler float-right" type="button" 
						data-toggle="collapse" data-target="#navbarTogglerDemo02" 
						aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</a>
			</div>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
						
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    							Services
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
								<Link className="dropdown-item" to={'services/rendering'}>1</Link>
								<Link className="dropdown-item" to={'services/rendering'}>2</Link>
								<Link className="dropdown-item" to={'services/rendering'}>3</Link>
								<button   type="button">Another action</button>
								<button className="dropdown-item" type="button">Something else here</button>
							</div>
						</div>							
					</li>
					<li className="nav-item">							
						<Link className="nav-link" to="/about-us">About Us</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/gallery">Gallery</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/meet-us">Meet Us</Link>						
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/promotions">Promotions</Link>						
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/contact">Contact</Link>						
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
				<hr/>

			</div>
			
		</nav>
	);
}