import React from "react";
import { events } from "../../utils/Constant";
import EventCard from "./EventCard";
import "./Event.css";

const Events = () => {
	return (
		<div className="events-component py-4">
			<div className="mx-auto container">
				<h2 className="title-level-2 mb-2" id="about">
					Nos événements
				</h2>
				<div className="filter-container items-center my-4 gap-2">
					<label htmlFor="filter-select" className="label-filter">
						Filtrer:
					</label>
					<select name="filter" id="filter-select" className="form-select w-25">
						<option value="">Prochains</option>
						<option value="">Passés</option>
					</select>
				</div>
				<div className="row">
					{events.map((item, _i) => (
						<div key={_i} className="col-sm-6 col-lg-4 mb-4">
							<EventCard event={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Events;
