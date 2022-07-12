import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import CarouselImage1 from "../../../assets/images/carousel1.jpg";
// import CarouselImage2 from "../../../assets/images/carousel2.png";
// import CarouselImage3 from "../../../assets/images/carousel3.jpg";
// const responsive = {
// 	superLargeDesktop: {
// 		breakpoint: { max: 4000, min: 3000 },
// 		items: 1,
// 	},
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 1,
// 		slidesToSlide: 1,
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 464 },
// 		items: 1,
// 		slidesToSlide: 1,
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 		slidesToSlide: 1,
// 	},
// };

function AppCarousel() {
	return (
		<section className="wontanara-banner d-flex align-items-center justify-content-center position-relative">
			{/* <Carousel
				// showArrows={true}
				// autoPlay={true}
				// centerMode={true}
				// centerSlidePercentage={100}
				// infiniteLoop={true}
				// emulateTouch={true}
				// interval={3000}
				// showThumbs={false}
				// showStatus={false}
				// transitionTime={3000}
				// width="100%"
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
				// removeArrowOnDeviceType={["tablet", "mobile"]}
				// dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				<div className="position-relative">
					<img src={CarouselImage1} alt="carousel" className="img-carousel" />
					<div className="d-flex align-items-center justify-content-center bg-success position-absolute top-0">
						<h1 className="banner-text">
							Amicale des étudiants guinéeens de L'ISI
						</h1>
						<button className="btn-voir-plus">Voir Plus</button>
					</div>
				</div>
				<div>
					<img src={CarouselImage2} alt="carousel" className="img-carousel" />
				</div>
				<div>
					<img src={CarouselImage3} alt="carousel" className="img-carousel" />
				</div>
			</Carousel> */}
			<div className="d-flex flex-column align-items-center gap-5 banner-text">
				<h1 className="banner-title">Amicale des étudiants guinéeens de L'ISI</h1>
				<button className="btn-voir-plus btn-espace-etudiant">Voir Plus</button>
			</div>
			<div className="banner-effect position-absolute"></div>
		</section>
	);
}

export default AppCarousel;
