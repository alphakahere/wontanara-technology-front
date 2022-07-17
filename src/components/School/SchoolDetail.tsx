import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const SchoolDetail = () => {
	const item = useLocation()?.state as any;
	return (
		<div className="py-4 events-details">
			<section className="carousel-container">
				<Carousel responsive={responsive}>
					{[...Array(6)].map((elem, i) => (
						<div key={i} className="p-0 m-0">
							<img
								src={`https://picsum.photos/300${i}`}
								alt=""
								width="100%"
								height="600px"
								className="object-cover"
							/>
						</div>
					))}
				</Carousel>
			</section>
			<div className="mx-auto container">
				<div className="d-flex align-items-end gap-2">
					<h6 className="detail-title text-center fw-500">{item?.sigle}</h6>
					<p className="school-name card-text text-center fw-500 mb-2">
						{item?.name}
					</p>
				</div>
				<div className="detail-text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
						beatae minima ipsam sit voluptas nam illo consequuntur impedit
						officia omnis distinctio dolores, autem, iste odio facere ad
						voluptates consequatur aspernatur?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
						beatae minima ipsam sit voluptas nam illo consequuntur impedit
						officia omnis distinctio dolores, autem, iste odio facere ad
						voluptates consequatur aspernatur?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
						beatae minima ipsam sit voluptas nam illo consequuntur impedit
						officia omnis distinctio dolores, autem, iste odio facere ad
						voluptates consequatur aspernatur?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
						beatae minima ipsam sit voluptas nam illo consequuntur impedit
						officia omnis distinctio dolores, autem, iste odio facere ad
						voluptates consequatur aspernatur?
					</p>
				</div>
			</div>
		</div>
	);
};

export default SchoolDetail;