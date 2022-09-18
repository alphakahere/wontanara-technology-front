import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useLocation } from "react-router-dom";

const EventDetail = () => {
	const event = useLocation()?.state as any;
	const photos = [
		{
			original: event?.images[0],
			thumbnail: event?.images[0],
		},
		{
			original: event?.images[1],
			thumbnail: event?.images[1],
		},
		{
			original: event?.images[2],
			thumbnail: event?.images[2],
		},
		{
			original: event?.images[3],
			thumbnail: event?.images[3],
		},
		{
			original: event?.images[4],
			thumbnail: event?.images[4],
		},
	];
	return (
		<div className="py-4 events-details">
			<div className="gallery-container">
				<ImageGallery items={photos} />
			</div>
			<div className="mx-auto container">
				<div className="d-flex justify-content-between align-items-center my-4">
					<h2 className="detail-title">{event?.title}</h2>
					<h6 className="card-name badge text-bg-dark">{event?.author}</h6>
				</div>
				<div
					className="detail-text"
					dangerouslySetInnerHTML={{ __html: event?.description }}
				/>
			</div>
		</div>
	);
};

export default EventDetail;
