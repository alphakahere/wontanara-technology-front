import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./router/router";

function App() {
	const routes = useRoutes(AppRoutes);
	return <div className="wontanara-app">{routes}</div>;
}

export default App;
