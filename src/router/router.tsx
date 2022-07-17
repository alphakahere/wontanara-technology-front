import EventDetail from "../components/Events/EventDetail";
import Events from "../components/Events/Events";
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
				path: "/nos-ecoles",
				element: <School />,
			},
			{
				path: "nos-ecoles/:slug",
				element: <SchoolDetail />,
			},
			{
				path: "/nos-evenements",
				element: <Events />,
			},
			{
				path: "/nos-evenements/:slug",
				element: <EventDetail />,
			},
		],
	},
];
