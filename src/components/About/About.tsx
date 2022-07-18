import React from "react";

const About = () => {
	return (
		<div className="container mx-auto py-4">
			<section className="about mb-5 pt-5">
				<h2 className="title-level-2" id="about">
					Qui sommes-nous
				</h2>
				<AboutSection />
			</section>
			<section className="how-it-work mb-5 pt-5">
				<h2 className="title-level-2" id="about">
					Comment ça marche
				</h2>
				<div className="row">
					<div className="col-lg-6">
						<ul className="about-text px-0">
							<li className="mb-3">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Enim totam dolorum tempora, ducimus dolor
								quam. Labore quo voluptate ullam fugiat vero
								accusamus dolorem? Necessitatibus, aliquid
								cupiditate asperiores reprehenderit harum velit?
							</li>
							<li className="mb-3">
								{" "}
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Enim totam dolorum tempora, ducimus dolor
								quam. Labore quo voluptate ullam fugiat vero
								accusamus dolorem?
							</li>
							<li className="mb-3">
								Necessitatibus, aliquid cupiditate asperiores
								reprehenderit harum velit?
							</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<ul className="about-text px-0">
							<li className="mb-3">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Enim totam dolorum tempora, ducimus dolor
								quam. Labore quo voluptate ullam fugiat vero
								accusamus dolorem? Necessitatibus, aliquid
								cupiditate asperiores reprehenderit harum velit?
							</li>
							<li className="mb-3">
								{" "}
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Enim totam dolorum tempora, ducimus dolor
								quam. Labore quo voluptate ullam fugiat vero
								accusamus dolorem?
							</li>
							<li className="mb-3">
								Necessitatibus, aliquid cupiditate asperiores
								reprehenderit harum velit?
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
				<ul className="about-text px-0">
					<li className="mb-3">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
						totam dolorum tempora, ducimus dolor quam. Labore quo voluptate
						ullam fugiat vero accusamus dolorem? Necessitatibus, aliquid
						cupiditate asperiores reprehenderit harum velit?
					</li>
					<li className="mb-3">
						{" "}
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
						totam dolorum tempora, ducimus dolor quam. Labore quo voluptate
						ullam fugiat vero accusamus dolorem?
					</li>
					<li className="mb-3">
						Necessitatibus, aliquid cupiditate asperiores reprehenderit
						harum velit?
					</li>
					<li className="mb-3">
						Necessitatibus, aliquid cupiditate asperiores reprehenderit
						harum velit?
					</li>
				</ul>
			</div>
			<div className="col-lg-6">
				<img
					src="https://picsum.photos/200"
					alt=""
					className=""
					width="100%"
					height="400px"
					style={{ borderRadius: "10px" }}
				/>
			</div>
		</div>
	);
}
export default About;
