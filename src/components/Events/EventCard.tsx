import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IEvent } from "./EventData";

const EventCard = ({ event }: { event: IEvent }) => {
	return (
		<div className="event-card card">
			<div className="event-img-container">
				<img
					src={event.images[0]}
					alt={event.title}
					className="event-card-img w-100"
				/>
			</div>
			<div className="p-3">
				<div className="d-flex justify-content-between align-items-start mb-3">
					<div className="flex-fill">
						<h5
							className="card-title card-custom-title"
							style={{ maxHeight: 50, height: 50 }}
						>
							{event?.title.slice(0, 40)}
							{event?.title.length > 40 && "..."}
						</h5>
						<small>{event.date}</small>
					</div>
					<h6 className="card-name badge text-bg-dark fs-13">
						{event?.author}
					</h6>
				</div>
				<div className="d-flex justify-content-center">
					<Link
						className="btn-voir-plus app-btn"
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
