import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import AppBanner from "./HomeSection/Banner";
import { events, schools } from "../../utils/Constant";
import SchoolCard from "../School/SchoolCard";
import EventCard from "../Events/EventCard";
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
		<div className="home-component ">
			<AppBanner />
			<div className="mx-auto container">
				<section className="about mb-5 pt-5">
					<h2 className="title-level-2" id="about">
						à propos
					</h2>
					<div className="row d-flex align-items-center">
						<div className="col-lg-6">
							<ul className="about-text px-0">
								<li className="mb-3">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Enim totam dolorum tempora,
									ducimus dolor quam. Labore quo voluptate ullam
									fugiat vero accusamus dolorem? Necessitatibus,
									aliquid cupiditate asperiores reprehenderit
									harum velit?
								</li>
								<li className="mb-3">
									{" "}
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Enim totam dolorum tempora,
									ducimus dolor quam. Labore quo voluptate ullam
									fugiat vero accusamus dolorem?
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
								<EventCard key={i} event={event} />
							))}
						</Carousel>
					</div>
				</section>
				<section className="about mb-5 pt-5">
					<h2 className="title-level-2">
						Trouvez les meilleures écoles du Sénégal
					</h2>
					<div className="row">
						{schools?.slice(0, 6)?.map((item, _i) => (
							<SchoolCard item={item} key={_i} />
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
