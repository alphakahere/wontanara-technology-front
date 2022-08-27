import React from "react";

function AppBanner() {
	const onScroll = () => window.scrollTo(0, 750);
	return (
		<section className="wontanara-banner d-flex align-items-center justify-content-center position-relative">
			<div className="d-flex flex-column align-items-center gap-5 banner-text">
				<h1 className="banner-title">
					Amicale des Elèves, Etudiants et Stagiaires Guinéens du Sénégal
				</h1>
				<button className="banner-btn shadow-lg" onClick={onScroll}>
					Voir Plus
				</button>
			</div>
			<div className="banner-effect position-absolute"></div>
		</section>
	);
}

export default AppBanner;
