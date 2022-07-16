import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import "./Navbar.css";
import LogoApp from "../../assets/images/logo.png";

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
		<nav className="navbar navbar-expand-lg bg-white py-3">
			<div className="container-fluid ">
				<div className="flex-sb navbar-resp-width">
					<NavLink className="navbar-brand" to="/">
						<img
							src={LogoApp}
							alt="wontanara-technologie-logo"
							height="40px"
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
					</ul>
					<div>
						<Link
							to="/espace-etudiant"
							className="btn-espace-etudiant ms-lg-3 items-center justify-content-center"
						>
							<BsFillPersonFill />
							<span>Espace Etudiant</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
