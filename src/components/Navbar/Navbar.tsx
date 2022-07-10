import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const Links = [
		{
			label: "Accueil",
			path: "/",
		},
		{
			label: "à propos",
			path: "/a-propos",
		},
		{
			label: "Les écoles",
			path: "/les-ecoles",
		},
		{
			label: "Nos événements",
			path: "/nos-evenements",
		},
		{
			label: "Contact",
			path: "/contact",
		},
	];
	return (
		<nav className="navbar navbar-expand-lg bg-white">
			<div className="container-fluid ">
				<div>
					<NavLink className="navbar-brand" to="/">
						Logo
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarApp"
						aria-controls="navbarApp"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="collapse navbar-collapse" id="navbarApp">
					<ul className="navbar-nav">
						{Links.map((item, index) => (
							<li className="nav-item" key={index}>
								<NavLink
									className={({ isActive }) =>
										`nav-link app-nav-link ${
											isActive && "active-link"
										}`
									}
									aria-current="page"
									to={item?.path}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
					<div>
						<Link to="/espace-etudiant">Espace Etudiant</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
