import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import Carousel from "../../components/Home/Carousel/Carousel";
import "./Header.css";
import { colors } from "../../utils/theme";

const Header = () => {
	const iconStyle = {
		color: colors.primary,
	};
	return (
		<header>
			<div className="top-header d-sm-flex align-items-center gap-5">
				<div className="d-flex align-items-center gap-2">
					<FiPhoneCall style={iconStyle} />
					<a href={`tel: ${"00221775280693"}`}>00221775280693</a>
				</div>
				<div className="d-flex align-items-center gap-2">
					<FiMail style={iconStyle} />
					<a href="mailto:alphakahere@gmail.com">contact@wontanaratech.com</a>
				</div>
			</div>
			<Navbar />
			<Carousel />
		</header>
	);
};

export default Header;
