import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const EventCard = ({ event }: { event: any }) => {
	return (
		<div className="event-card card">
			<div className="event-img-container">
				<img
					src={`https://picsum.photos/10${Math.round(Math.random() * 10)}`}
					alt={event.title}
					className="event-card-img w-100"
				/>
			</div>
			<div className="p-3">
				<div className="d-flex justify-content-between mb-3">
					<h5 className="card-title">{event?.title}</h5>
					<h6 className="card-name badge text-bg-dark fs-13">{event?.name}</h6>
				</div>
				<div className="d-flex justify-content-center">
					<Link
						className="btn-voir-plus btn-espace-etudiant"
						to={`/nos-evenements/:${Math.round(Math.random() * 10)}`}
						state={event}
					>
						<span>Details</span>
						<FiChevronsRight />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
