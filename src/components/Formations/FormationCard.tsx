import React from "react";
import { Link } from "react-router-dom";

const FormationCard = ({ formation }: { formation: any }) => {
	return (
		<Link to="/formations" className="formation-card card">
			<div className="formation-img-container">
				<img
					src={`https://picsum.photos/10${Math.round(Math.random() * 10)}`}
					alt={formation.title}
					className="formation-card-img w-100"
				/>
			</div>
			<div className="p-3">
				<h5 className="card-title">{formation?.name}</h5>
				<div className="mt-2">
					<p>{formation?.except}</p>
				</div>
			</div>
		</Link>
	);
};

export default FormationCard;
