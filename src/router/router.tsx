import Home from "../components/Home/Home";
import Layout from "../Layouts/Layout";

export const AppRoutes = [
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
];
