import React from "react";
import { schools } from "../../utils/Constant";
import SchoolCard from "./SchoolCard";

const School = () => {
	return (
		<div className="school-component py-4">
			<div className="mx-auto container">
				<h2 className="title-level-2 mb-2">Nos écoles partenaires</h2>
				<p className="">
					Choisissez votre programme et votre école parmi notre catalogue de 5
					écoles qui offrent 50 programmes dans les domaines de l'Informatique,
					du Marketting, du Commerce,...
				</p>
				<div className="filter-container items-center my-4 gap-2">
					<label htmlFor="filter-select" className="label-filter">
						Filtrer par domaine:
					</label>
					<select name="filter" id="filter-select" className="form-select w-25">
						<option value="">Informatique</option>
						<option value="">Gestion</option>
						<option value="">Marketting</option>
						<option value="">Communication</option>
					</select>
				</div>
				<div className="row">
					{schools?.map((item, _i) => (
						<SchoolCard item={item} key={_i} />
					))}
				</div>
			</div>
		</div>
	);
};

export default School;
