import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useLocation } from "react-router-dom";

const images = [
	{
		original: "https://picsum.photos/id/1000/2000/700/",
		thumbnail: "https://picsum.photos/id/1000/250/150/",
	},
	{
		original: "https://picsum.photos/id/1020/2000/700/",
		thumbnail: "https://picsum.photos/id/1020/250/150/",
	},
	{
		original: "https://picsum.photos/id/1019/2000/700/",
		thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
	{
		original: "https://picsum.photos/id/1014/2000/700/",
		thumbnail: "https://picsum.photos/id/1014/250/150/",
	},
];

const EventDetail = () => {
	const event = useLocation()?.state as any;
	return (
		<div className="py-4 events-details">
			<div className="gallery-container">
				<ImageGallery items={images} />
			</div>
			<div className="mx-auto container">
				<div className="d-flex justify-content-between align-items-center my-4">
					<h2 className="detail-title">{event?.title}</h2>
					<h6 className="card-name badge text-bg-dark">{event?.name}</h6>
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

export default EventDetail;
