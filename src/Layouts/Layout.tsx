import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
