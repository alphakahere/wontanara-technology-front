import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { iconStyle } from "../../common/Header/Header";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="contact-page">
			<div className="mx-auto container py-5">
				<div className="mb-md-5 mb-4 text-center">
					<h1 className="contact-title fw-600 mb-0">Contactez-nous</h1>
					<small className="contact-small-text">
						Avez-vous une question ou une rémarque, écrivez nous juste un
						message!
					</small>
				</div>
				<div className="row">
					<div className="col-md-6 mb-4">
						<h2 className="contact-title">Informations de contact</h2>
						<div className="mt-3">
							<div className="d-flex align-items-center gap-2 mb-2">
								<FiPhoneCall style={iconStyle} />
								<a
									href={`tel: ${"00221775280693"}`}
									className="info-link"
								>
									00221775280693
								</a>
							</div>
							<div className="d-flex align-items-center gap-2 mb-2">
								<FiMail style={iconStyle} />
								<a
									href="mailto:contact@wontanaratech.com"
									className="info-link"
								>
									contact@wontanaratech.com
								</a>
							</div>
							<div className="d-flex align-items-center gap-2 fw-500">
								<IoLocationOutline style={iconStyle} />
								<address>Dakar, Sénégal</address>
							</div>
							<ul className="flex-sb p-0 mt-5">
								<li className="social-media-container">
									<a href="/" className="social-media-link">
										<FaFacebookF />
									</a>
								</li>
								<li className="social-media-container">
									<a href="/" className="social-media-link">
										<AiFillInstagram />
									</a>
								</li>
								<li className="social-media-container">
									<a href="/" className="social-media-link">
										<AiOutlineTwitter />
									</a>
								</li>
								<li className="social-media-container">
									<a href="/" className="social-media-link">
										<FaLinkedin />
									</a>
								</li>
								<li className="social-media-container">
									<a href="/" className="social-media-link">
										<AiFillYoutube />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
						<form>
							<div className="form-group mb-3">
								<label htmlFor="firstname">Prénoms</label>
								<input
									type="text"
									name="firstname"
									id="firstname"
									className="form-control"
								/>
							</div>
							<div className="form-group mb-3">
								<label htmlFor="lastname">Noms</label>
								<input
									type="text"
									name="lastname"
									id="lastname"
									className="form-control"
								/>
							</div>
							<div className="form-group mb-3">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									className="form-control"
								/>
							</div>
							<div className="form-group mb-3">
								<label htmlFor="subject">Sujet</label>
								<input
									type="text"
									name="subject"
									id="subject"
									className="form-control"
								/>
							</div>
							<div className="form-group mb-3">
								<label htmlFor="firstname">Message</label>
								<textarea
									name="message"
									id="message"
									className="form-control form-textarea"
								/>
							</div>
							<div className="flex-r">
								<button className="app-btn" type="submit">
									Envoyer
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
