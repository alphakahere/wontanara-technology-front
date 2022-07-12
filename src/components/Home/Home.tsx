import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const Home = () => {
	return (
		<div className="home-component container mx-auto">
			<section className="about mb-5 pt-5">
				<h2 className="title-level-2">à propos</h2>
				<div className="row">
					<div className="col-md-6">
						<ul>
							<li>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Enim totam dolorum tempora, ducimus dolor
								quam. Labore quo voluptate ullam fugiat vero
								accusamus dolorem? Necessitatibus, aliquid
								cupiditate asperiores reprehenderit harum velit?
							</li>
							<li>
								{" "}
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Enim totam dolorum tempora, ducimus dolor
								quam. Labore quo voluptate ullam fugiat vero
								accusamus dolorem?
							</li>
							<li>
								Necessitatibus, aliquid cupiditate asperiores
								reprehenderit harum velit?
							</li>
							<li>
								Necessitatibus, aliquid cupiditate asperiores
								reprehenderit harum velit?
							</li>
						</ul>
					</div>
					<div className="col-md-6">
						<img
							src="https://picsum.photos/200"
							alt=""
							className=""
							width="100%"
							height="400px"
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
						arrows={false}
						// removeArrowOnDeviceType={["tablet", "mobile"]}
						// dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						<div className="event-card card">
							<h5 className="card-title">Card title</h5>
							<h6 className="card-name">ISI 2022</h6>
							<button>Voir plus</button>
						</div>
						<div className="event-card card">
							<h5 className="card-title">Card title</h5>
							<h6 className="card-name">ISI 2022</h6>
							<button>Voir plus</button>
						</div>
						<div className="event-card card">
							<h5 className="card-title">Card title</h5>
							<h6 className="card-name">ISI 2022</h6>
							<button>Voir plus</button>
						</div>
						<div className="event-card card">
							<h5 className="card-title">Card title</h5>
							<h6 className="card-name">ISI 2022</h6>
							<button>Voir plus</button>
						</div>
					</Carousel>
				</div>
			</section>
			<section className="about mb-5 pt-5">
				<h2 className="title-level-2">Trouvez les meilleures écoles du Sénégal</h2>
				<div className="row">
					{[...Array(8)].map((elem, _i) => (
						<div
							className="card px-0 mb-3 col-sm-6 col-md-4 col-xl-4"
							key={_i}
						>
							<img
								src={`https://picsum.photos/10${_i}`}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="/" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
