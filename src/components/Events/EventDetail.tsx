import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useLocation } from "react-router-dom";

const images = [
	{
		original: "https://picsum.photos/id/1018/1000/600/",
		thumbnail: "https://picsum.photos/id/1018/250/150/",
	},
	{
		original: "https://picsum.photos/id/1015/1000/600/",
		thumbnail: "https://picsum.photos/id/1015/250/150/",
	},
	{
		original: "https://picsum.photos/id/1019/1000/600/",
		thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
];

const EventDetail = () => {
	const event = useLocation()?.state as any;
	console.log(event);
	return (
		<div className="py-4 mx-auto container events-details">
			<div className="gallery-container position-relative">
				<ImageGallery items={images} />
			</div>
			<div className="d-flex justify-content-between align-items-center my-4">
				<h2 className="detail-title">{event?.title}</h2>
				<h6 className="card-name badge text-bg-dark">{event?.name}</h6>
			</div>
			<div className="detail-text">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
					minima ipsam sit voluptas nam illo consequuntur impedit officia omnis
					distinctio dolores, autem, iste odio facere ad voluptates consequatur
					aspernatur?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
					minima ipsam sit voluptas nam illo consequuntur impedit officia omnis
					distinctio dolores, autem, iste odio facere ad voluptates consequatur
					aspernatur?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
					minima ipsam sit voluptas nam illo consequuntur impedit officia omnis
					distinctio dolores, autem, iste odio facere ad voluptates consequatur
					aspernatur?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
					minima ipsam sit voluptas nam illo consequuntur impedit officia omnis
					distinctio dolores, autem, iste odio facere ad voluptates consequatur
					aspernatur?
				</p>
			</div>
		</div>
	);
};

export default EventDetail;
