import React from "react";
import Supdeco from "../../../assets/images/supdeco.jpg";
import ABS from "../../../assets/images/ABS.png";
import CEFAS from "../../../assets/images/cefas.jpg";

const PartnerCard = {
	borderRadius: "5px",
	minHeight: "300px",
} as React.CSSProperties;

const Partenaires = () => {
	return (
		<div className="row">
			<div className="col-md-4 mb-3">
				<div
					className="partner-card shadow py-4 flex-mc bg-white"
					style={PartnerCard}
				>
					<div className="logo-container">
						<img src={Supdeco} alt="supdeco" style={{ width: "200px" }} />
					</div>
				</div>
			</div>
			<div className="col-md-4  mb-3">
				<div
					className="partner-card shadow py-4 flex-mc bg-white"
					style={PartnerCard}
				>
					<div className="logo-container">
						<img src={ABS} alt="ABS" style={{ width: "200px" }} />
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div
					className="partner-card shadow py-4 flex-mc bg-white"
					style={PartnerCard}
				>
					<div className="logo-container">
						<img src={CEFAS} alt="CEFAS" style={{ width: "200px" }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partenaires;
