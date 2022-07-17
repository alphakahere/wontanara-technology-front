import React from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
// @ts-ignore
import pdf from "../../assets/Documents/ubuntu.pdf";

const SchoolCard = ({ item }: { item: any }) => {
	return (
		<div className="mb-4 col-sm-6 col-lg-4">
			<div className="card card-school">
				<img
					src={`https://picsum.photos/20${Math.round(Math.random() * 10)}`}
					className="card-img-top card-shcool-img"
					alt="card-img"
				/>
				<div className="card-body">
					<h5 className="card-title text-center fw-500">{item?.sigle}</h5>
					<p className="school-name card-text text-center fw-500 mb-2">
						{item?.name}
					</p>
					<p className="card-text">{item?.except}</p>
					<div className="flex-sb-ic mt-3 p-2">
						<Link
							to={`/nos-ecoles/:${Math.round(Math.random() * 10)}`}
							className="btn-voir-plus btn-espace-etudiant"
							state={item}
						>
							Continuer
						</Link>
						<a
							href={pdf}
							className="download-link"
							target="_blank"
							rel="noreferrer"
						>
							<FiDownload />
							<span>Brochure</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SchoolCard;
