import React, { useState } from "react";
import { formations } from "../../utils/Constant";
import FormationCard from "./FormationCard";
import "./Formations.css";

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

const Formations = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="formations-component py-4">
			<div className="mx-auto container">
				<h2 className="title-level-2 mb-2">Nos formations</h2>
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
					{formations.map((item, _i) => (
						<div key={_i} className="col-sm-6 col-lg-4 mb-4">
							<FormationCard formation={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Formations;
