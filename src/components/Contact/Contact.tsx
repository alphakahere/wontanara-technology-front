import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { iconStyle } from "../../common/Header/Header";

const Contact = () => {
	return (
		<div className="mx-auto container py-4">
			<h1 className="contact-title">Contactez-nous</h1>
			<small>
				Avez-vous une question ou une rémarque, écrivez nous juste un message!
			</small>
			<div className="row">
				<div className="col-md-6">
					<h2 className="contact-title">Informations de contact</h2>
					<div>
						<div className="d-flex align-items-center gap-2">
							<FiPhoneCall style={iconStyle} />
							<a href={`tel: ${"00221775280693"}`}>00221775280693</a>
						</div>
						<div className="d-flex align-items-center gap-2">
							<FiMail style={iconStyle} />
							<a href="mailto:contact@wontanaratech.com">
								contact@wontanaratech.com
							</a>
						</div>
						<div className="d-flex align-items-center gap-2">
							<IoLocationOutline style={iconStyle} />
							<address>Dakar, Sénégal</address>
						</div>
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
								className="form-control"
							/>
						</div>
						<div className="flex-r">
							<button className="btn-espace-etudiant" type="submit">
								Envoyer
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
