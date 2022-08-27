import React from "react";
// import about from "../../assets/videos/about.mp4";
const About = () => {
	return (
		<div className="container mx-auto py-4">
			<section className="about mb-5 pt-5">
				<h2 className="title-level-2">Qui sommes-nous</h2>
				<AboutSection />
			</section>
			<section className="how-it-work mb-5 pt-5">
				<h2 className="title-level-2">Nos Objectifs</h2>
				<h6>L’Amicale a pour objectifs de :</h6>
				<div className="row pt-4">
					<div className="col-lg-6">
						<ul className="about-text px-0">
							<li className="mb-3">
								Promouvoir l’unité et la solidarité entre élèves,
								étudiants et stagiaires d’une part ; et le
								rapprochement de ladite Amicale avec d’autres
								structures similaires d’autre part.
							</li>
							<li className="mb-3">
								{" "}
								Défendre les intérêts matériels et moraux de ses
								membres.
							</li>
							<li className="mb-3">
								Contribuer à l’épanouissement culturel et sportif de
								ses membres.
							</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<ul className="about-text px-0">
							<li className="mb-3">
								Renforcer la formation de ses membres.
							</li>
							<li className="mb-3">
								{" "}
								Mettre en œuvre tout autre objectif non spécifié
								permettant la réalisation des buts susmentionnés
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="how-it-work mb-5 pt-5">
				<h2 className="title-level-2">
					Conditions et procédure d’adhésion à l’AEESGS
				</h2>
				<div className="row pt-4">
					<div className="col-lg-6">
						<ul className="about-text px-0">
							<li className="mb-3">
								L’adhésion est personnellement sollicitée par le
								candidat qui doit, à cet effet, s'adresser au bureau
								Exécutif.
							</li>
							<li className="mb-3">
								{" "}
								Etre guinéen de nationalité ou d’origine ;
							</li>
							<li className="mb-3">
								Jouir de toutes ses facultés mentales ;
							</li>
							<li>
								La carte de membre porte l’identité de l’adhérent
								ainsi que toute mention jugée utile par le bureau
								Exécutif.
							</li>
							<li>
								L’émission et la distribution des cartes d’adhésion
								relèvent de la seule compétence du Bureau Exécutif
								qui fixe les modalités.
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};
export function AboutSection() {
	return (
		<div className="row d-flex align-items-center">
			<div className="col-lg-6">
				<div className="about-text pe-4">
					<p className="mb-2">
						L’amicale des Élèves, Étudiants et Stagiaires Guinéens au
						Sénégal (AEESGS) est une association apolitique à but non
						lucratif. L’ AEESGS est l’une des plus anciennes organisations
						estudiantines au Sénégal créée dans les années 1960, par la
						cohorte des premiers étudiants et intellectuels guinéens de
						l’Université de Dakar actuelle Cheikh Anta Diop (UCAD). Cette
						association se veut le reflet de la longue coopération
						multisectorielle liant la Guinée et le Sénégal.
					</p>
					<p className="mb-2">
						Elle a été déclarée d’utilité publique au Sénégal par l’arrêté
						ministériel N0011050/MINT/DGAT/DLP/du 26 octobre 2012. Elle est
						la structure qui fédère et coordonne toutes les activités
						pédagogiques, sociales et culturelles des Élèves, Étudiants et
						Stagiaires Guinéens dans toutes les Universités publiques et
						privées du Sénégal.
					</p>
					<p>
						L’AEESGS s’étend sur toute l’étendue du territoire sénégalais,
						elle est indépendante. Les Antennes représentant les guinéens
						dans les différentes écoles ou établissements d'enseignement
						supérieur de Dakar et des autres régions du Sénégal sont sous la
						tutelle de l’AEESGS.
					</p>
				</div>
			</div>
			<div className="col-lg-6 ps-4">
				<img
					src="https://picsum.photos/200"
					alt=""
					className=""
					width="100%"
					height="500px"
					style={{ borderRadius: "10px" }}
				/>
			</div>
		</div>
	);
}
export default About;
