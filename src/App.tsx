import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./router/router";

function App() {
	const routes = useRoutes(AppRoutes);
	return (
		<div className="wontanara-app">
			<ScrollToTop />
			{routes}
		</div>
	);
}

function ScrollToTop() {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname, location.state]);
	return null;
}
export default App;
