import React from "react";
import { FiChevronsRight, FiDownload } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./Home.css";
// @ts-ignore
import pdf from "../../assets/Documents/ubuntu.pdf";
const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 3,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const events = [
	{ title: "Journée Culturelle", name: "ISI 2022" },
	{ title: "Journée Culturelle", name: "IAM 2022" },
	{ title: "Journée Culturelle", name: "ISM 2022" },
	{ title: "Journée d'intégration", name: "UCAD 2022" },
];
const schools = [
	{
		sigle: "IAM",
		name: "Institut Africain  de Management",
		except: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam dolorum tempora, ducimus dolor quam.",
		pdf: "pdf",
	},
	{
		sigle: "ISI",
		name: "Institut Supérieur d'Informatique",
		except: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam dolorum tempora, ducimus dolor quam.",
		pdf: "pdf",
	},
	{
		sigle: "UCAD",
		name: "Université Cheick Anta Diop",
		except: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam dolorum tempora, ducimus dolor quam.",
		pdf: "pdf",
	},
	{
		sigle: "ISM",
		name: "Institut Supérieur de Management",
		except: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam dolorum tempora, ducimus dolor quam.",
		pdf: "pdf",
	},
	{
		sigle: "UNIPRO",
		name: "Univers Professionnels",
		except: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam dolorum tempora, ducimus dolor quam.",
		pdf: "pdf",
	},
];
const Home = () => {
	return (
		<div className="home-component container mx-auto">
			<section className="about mb-5 pt-5">
				<h2 className="title-level-2">à propos</h2>
				<div className="row d-flex align-items-center">
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
							<li className="mb-3">
								Necessitatibus, aliquid cupiditate asperiores
								reprehenderit harum velit?
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
			</section>
			<section className="events-section mb-5">
				<h2 className="title-level-2">Nos évènements</h2>
				<div className="events">
					<Carousel
						swipeable={false}
						draggable={true}
						showDots={true}
						responsive={responsive}
						ssr={true}
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={3000}
						keyBoardControl={false}
						customTransition="transform 1000ms ease-in-out"
						transitionDuration={3000}
						containerClass="carousel-container"
						arrows={true}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						{events?.map((event, i) => (
							<div className="event-card card" key={i}>
								<div className="event-img-container">
									<img
										src={`https://picsum.photos/10${i}`}
										alt={event.title}
										className="event-card-img w-100"
									/>
								</div>
								<div className="p-3">
									<div className="d-flex justify-content-between mb-3">
										<h5 className="card-title">
											{event?.title}
										</h5>
										<h6 className="card-name badge text-bg-dark fs-13">
											{event?.name}
										</h6>
									</div>
									<div className="d-flex justify-content-center">
										<Link
											className="btn-voir-plus btn-espace-etudiant"
											to="/"
										>
											<span>Details</span>
											<FiChevronsRight />
										</Link>
									</div>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			</section>
			<section className="about mb-5 pt-5">
				<h2 className="title-level-2">Trouvez les meilleures écoles du Sénégal</h2>
				<div className="row">
					{schools.map((item, _i) => (
						<div className="mb-4 col-sm-6 col-lg-4" key={_i}>
							<div className="card card-school">
								<img
									src={`https://picsum.photos/20${_i}`}
									className="card-img-top card-shcool-img"
									alt="card-img"
								/>
								<div className="card-body">
									<h5 className="card-title text-center fw-500">
										{item?.sigle}
									</h5>
									<p className="school-name card-text text-center fw-500 mb-2">
										{item?.name}
									</p>
									<p className="card-text">{item?.except}</p>
									<div className="flex-sb-ic mt-3 p-2">
										<Link
											to="/"
											className="btn-voir-plus btn-espace-etudiant"
										>
											Continuer
										</Link>
										<a
											href={pdf}
											className="download-link"
											target="_blank"
											rel="noreferrer"
										>
											<FiDownload />
											<span>Brochure</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
