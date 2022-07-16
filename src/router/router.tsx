import Events from "../components/Events/Events";
import Home from "../components/Home/Home";
import School from "../components/School/School";
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
				path: "/nos-evenements",
				element: <Events />,
			},
		],
	},
];
