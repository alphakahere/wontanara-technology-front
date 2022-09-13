import React from "react";
import Supdeco from "../../../assets/images/supdeco.jpg";
import ABS from "../../../assets/images/ABS.png";
import CEFAS from "../../../assets/images/cefas.jpg";

const PartnerCardStyle = {
	borderRadius: "5px",
	minHeight: "250px",
} as React.CSSProperties;

const Partenaires = () => {
	return (
		<div className="row">
			<PartenerCard logo={Supdeco} title="supdeco" />
			<PartenerCard logo={ABS} title="ABS" />
			<PartenerCard logo={CEFAS} title="supdeco" />
		</div>
	);
};

interface Partner {
	logo: string;
	title: string;
}

const PartenerCard: React.FC<Partner> = ({ logo, title }) => {
	return (
		<div className="col-md-4">
			<div
				className="partner-card shadow py-4 flex-mc bg-white"
				style={PartnerCardStyle}
			>
				<div className="logo-container">
					<img src={logo} alt={title} style={{ width: "200px" }} />
				</div>
			</div>
		</div>
	);
};

export default Partenaires;
