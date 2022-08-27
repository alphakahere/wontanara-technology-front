import React from "react";

function AppBanner() {
	const onScroll = () => window.scrollTo(0, 650);
	return (
		<section className="wontanara-banner d-flex align-items-center justify-content-center position-relative">
			<div className="d-flex flex-column align-items-center gap-5 banner-text">
				<h1 className="banner-title">
					<span
						className="px-2 py-1"
						style={{ borderRadius: "10px", backgroundColor: "red" }}
					>
						Amicale des Elèves,
					</span>{" "}
					<span
						style={{ backgroundColor: "#ffc107", borderRadius: "10px" }}
						className="px-2 py-1"
					>
						{" "}
						Etudiants et Stagiaires
					</span>{" "}
					<span
						style={{ backgroundColor: "#28a745", borderRadius: "10px" }}
						className="px-2 py-1"
					>
						Guinéens au Sénégal
					</span>
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
