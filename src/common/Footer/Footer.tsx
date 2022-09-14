import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="row pt-4 footer-links-container mx-auto container">
				<div className="col-md-4 ps-0">
					<ul>
						<li className="list-title">Liens utiles</li>
						<li>
							<Link to="/a-propos">à propos</Link>
						</li>
						<li>
							<Link to="/nos-ecoles">Nos écoles</Link>
						</li>
						<li>
							<Link to="/nos-evenements">Nos événements</Link>
						</li>
					</ul>
				</div>
				<div className="col-md-4 ps-0">
					<ul>
						<li className="list-title mt-3 mt-md-0">Nous suivre</li>
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
				<div className="col-md-4 ps-0">
					<ul>
						<li className="list-title mt-3 mt-md-0">Contacts</li>
						<li>
							<Link to="/contact">Nous contacter</Link>
						</li>
						<li className="d-flex align-items-center gap-2">
							<FiPhoneCall />
							<a href="mailto:contact@wontanaratech.com">
								contact@wontanaratech.com
							</a>
						</li>
						<li className="d-flex align-items-center gap-2">
							<FiMail />
							<a href={`tel: ${"00221775280693"}`}>00221775280693</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="wontanara-sign d-flex align-items-center flex-column flex-sm-row justify-content-center gap-1 py-3">
				<p>© {year} Tous droits réservés.</p>
				<Link translate="no" to="/">
					Wontanara technology
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
