import "./page.css";

import Links from "./links/links.js";
import { Navigate, Routes, Route } from "react-router-dom";

import routerData from "./router-data/routerData.js";

const Page = () => (
	<div className="pageWrapper">

		<Links />
		<Routes>
			<Route path="/" element={<Navigate to="/planets" />} />

			{routerData.map((el) => (<Route key={el.id} path={el.path} element={el.element} />))}

			<Route path="*" element={<h2>Страница не найдена</h2>} />
		</Routes>

	</div>
);

export default Page;