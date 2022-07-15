import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
	return (
		<footer>
			<div className="row footer py-3">
				<div className="col-md-4">
					<ul>
						<li>Liens utiles</li>
						<li>
							<Link to="/">à propos</Link>
						</li>
						<li>
							<Link to="/">Nos écoles</Link>
						</li>
						<li>
							<Link to="/">Nos événements</Link>
						</li>
					</ul>
				</div>
				<div className="col-md-4">
					<ul>
						<li>Nous suivre</li>
						<li>
							<a href="/">Facebook</a>
						</li>
						<li>
							<a href="/">Instagram</a>
						</li>
						<li>
							<a href="/">Twitter</a>
						</li>
						<li>
							<a href="/">Linkedin</a>
						</li>
						<li>
							<a href="/">Youtube</a>
						</li>
					</ul>
				</div>
				<div className="col-md-4">
					<ul>
						<li>Contact</li>
						<li>
							<Link to="/">Nous contacter</Link>
						</li>
						<li>
							<a href="mailto:contact@wontanaratech.com">
								contact@wontanaratech.com
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="wontanara-sign">
				<p className="text-center py-3">
					©2021 Tous droits réservés.
					<Link translate="no" to="/">
						Wontanara technology
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
