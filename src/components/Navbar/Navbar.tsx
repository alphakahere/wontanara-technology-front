import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import LogoApp from "../../assets/images/logo.jpeg";
import { FiLogIn } from "react-icons/fi";

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
		label: "écoles",
		path: "/nos-ecoles",
	},
	{
		label: "événements",
		path: "/nos-evenements",
	},
	{
		label: "Formations",
		path: "/formations",
	},
	{
		label: "Contact",
		path: "/contact",
	},
];

const OppurtunityLinks = [
	{
		label: "Bourse d'études",
		path: "/",
	},
	{
		label: "Orientation",
		path: "/",
	},
	{
		label: "Hebergement",
		path: "/",
	},
	{
		label: "Aide Financière",
		path: "/",
	},
];
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-white py-3">
			<div className="container-fluid ">
				<div className="flex-sb navbar-resp-width">
					<NavLink className="navbar-brand" to="/">
						<img
							src={LogoApp}
							alt="wontanara-technologie-logo"
							width="100%"
							height="50px"
						/>
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
				<div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarApp">
					<ul className="navbar-nav ms-auto">
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
						<div className="dropdown">
							<button
								className="nav-link app-nav-dropdown-btn no-style-btn dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Oppurtinités
							</button>
							<ul className="dropdown-menu">
								{OppurtunityLinks?.map((item, index) => (
									<li key={item.path + index}>
										<NavLink
											className="dropdown-item"
											to={item.path}
										>
											{item.label}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</ul>
					<div>
						<Link
							to="/se-connecter"
							className="app-btn ms-lg-3 items-center justify-content-center px-3 py-2"
						>
							<FiLogIn style={{ fontSize: 18 }} />
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
