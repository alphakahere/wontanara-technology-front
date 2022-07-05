import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const Links = [
		"Accueil",
		"A propos",
		"Les écoles",
		"Nos événements",
		"Contact",
		"Espace Etudiant",
	];
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					Logo
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						{Links.map((item, index) => (
							<li className="nav-item" key={index}>
								<NavLink
									className="nav-link active"
									aria-current="page"
									to=""
								>
									{item}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
