import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import EventDetail from "../components/Events/EventDetail";
import Events from "../components/Events/Events";
import Formations from "../components/Formations/Formations";
import Home from "../components/Home/Home";
import School from "../components/School/School";
import SchoolDetail from "../components/School/SchoolDetail";
import Layout from "../Layouts/Layout";

export const AppRoutes = [
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "nos-ecoles",
				element: <School />,
			},
			{
				path: "nos-ecoles/:slug",
				element: <SchoolDetail />,
			},
			{
				path: "nos-evenements",
				element: <Events />,
			},
			{
				path: "nos-evenements/:slug",
				element: <EventDetail />,
			},
			{
				path: "a-propos",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "formations",
				element: <Formations />,
			},
		],
	},
];
