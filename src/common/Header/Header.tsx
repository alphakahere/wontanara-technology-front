import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import "./Header.css";
import { colors } from "../../utils/theme";
export const iconStyle = {
	color: colors.primary,
};
const Header = () => {
	return (
		<header>
			<div className="top-header d-sm-flex align-items-center gap-5">
				<div className="d-flex align-items-center gap-2">
					<FiPhoneCall style={iconStyle} />
					<a href={`tel: ${"00221784947772"}`}>00221784947772</a>
				</div>
				<div className="d-flex align-items-center gap-2">
					<FiMail style={iconStyle} />
					<a href="mailto:aeesgs2019@gmail.com">aeesgs2019@gmail.com</a>
				</div>
			</div>
			<Navbar />
		</header>
	);
};

export default Header;
