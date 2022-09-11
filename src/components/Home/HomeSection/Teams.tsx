import React from "react";
import { Link } from "react-router-dom";

const Teams = () => {
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
			<div className="teams-card-container col-lg-6">
				<div className="row">
					<MemberCard name="Fatoumata Binta Diallo" poste="Présidente" />
					<MemberCard name="Souleymane Diallo" poste="Sécrétaire géneral" />
					<MemberCard name="Koto Bhoye" poste="Tous" />

					<MemberCard name="Moussa" poste="Tous" />
				</div>
			</div>
		</div>
	);
};

interface Member {
	name: string;
	poste: string;
	style?: React.CSSProperties;
}
const MemberCard: React.FC<Member> = ({ name, poste, style }) => {
	return (
		<div className="mb-4 col-md-6" style={style}>
			<div
				className="card-member shadow py-4 px-2 bg-white"
				style={{ borderRadius: "5px" }}
			>
				<div className="member-img-container flex-c">
					<img
						src={`https://i.pravatar.cc/20${Math.round(
							Math.random() * 10
						)}`}
						className="card-img-top card-member-img"
						alt="memer-img"
						style={{ width: "150px", height: "150px", borderRadius: "50%" }}
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

export default Teams;
