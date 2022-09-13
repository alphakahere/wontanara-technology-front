import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PresiAvatar from "../../../assets/images/teams/presi.jpeg";
import "./Teams.css";
const Teams = () => {
	const { width } = useWindowDimensions();
	return (
		<div className="row d-lg-flex align-items-center">
			<div className="teams-accroche col-lg-6 mb-5">
				<div>
					<p>
						Le lorem ipsum est, en imprimerie, une suite de mots sans
						signification utilisée à titre provisoire pour calibrer une mise
						en page, le texte définitif venant remplacer le faux-texte dès
						qu'il est prêt ou que la mise en page est achevée. Généralement,
						on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
					</p>
					<p>
						Le lorem ipsum est, en imprimerie, une suite de mots sans
						signification utilisée à titre provisoire pour calibrer une mise
						en page, le texte définitif venant remplacer le faux-texte dès
						qu'il est prêt ou que la mise en page est achevée. Généralement,
						on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
					</p>
				</div>
				<div className="link-container mt-5">
					<Link
						to={`/a-propos/:${Math.round(Math.random() * 10)}`}
						className="btn-voir-plus app-btn"
						// state={item}
					>
						Plus d'infos
					</Link>
				</div>
			</div>
			<div className="col-lg-6">
				<div className={`${width > 575 ? "teams-card-container" : "row"}`}>
					<MemberCard
						name="Fatoumata Binta Diallo"
						poste="Présidente"
						avatar={PresiAvatar}
						id={1}
					/>
					<MemberCard
						name="Souleymane Diallo"
						poste="Sécrétaire géneral"
						id={2}
					/>
					<MemberCard name="Koto Bhoye" poste="Tous" id={3} />

					<MemberCard name="Moussa" poste="Dev" id={4} />
				</div>
			</div>
		</div>
	);
};

interface Member {
	name: string;
	poste: string;
	avatar?: string;
	id?: number;
}
const MemberCard: React.FC<Member> = ({ name, poste, avatar, id }) => {
	return (
		<div
			className={`card-member-${id} mb-4 mb-sm-0 shadow bg-white card-member  py-4 px-2 flex-mc`}
			style={{ borderRadius: "5px" }}
		>
			<div>
				<div className="member-img-container flex-c">
					<img
						src={
							avatar
								? avatar
								: `https://i.pravatar.cc/20${Math.round(
										Math.random() * 10
								  )}`
						}
						className="card-img-top card-member-img"
						alt="memer-img"
						style={{
							width: "150px",
							height: "150px",
							borderRadius: "50%",
						}}
					/>
				</div>
				<div className="card-body mt-3">
					<h5
						className="member-card-name text-center  fw-600"
						style={{ whiteSpace: "nowrap" }}
					>
						{name}
					</h5>
					<p className="member-function card-text text-center fw-600 mb-2">
						{poste}
					</p>
				</div>
			</div>
		</div>
	);
};

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

export default Teams;
