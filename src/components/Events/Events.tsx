import React, { useState } from "react";
import EventCard from "./EventCard";
import "./Event.css";
import { events } from "./EventData";

const filters = [
	{
		label: "Filter 1",
		value: "value1",
	},
	{
		label: "Filter 2",
		value: "value2",
	},
	{
		label: "Filter 3",
		value: "value3",
	},
];

const Events = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="events-component py-4">
			<div className="mx-auto container">
				<h2 className="title-level-2 mb-2">Nos événements</h2>
				<div className="filter-container items-center  gap-2">
					{filters?.map((item, index) => (
						<button
							className={`filter-btn shadow px-2 py-1 mb-5 bg-body rounded ${
								active === index && "active"
							}`}
							key={item?.value}
							onClick={() => setActive(index)}
						>
							{item?.label}
						</button>
					))}
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
