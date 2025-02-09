import "./page.css";

import Links from "./links/links.js";
import { Navigate } from "react-router-dom";

import RouterData from "./router/router.js";
import { Routes, Route } from "react-router-dom";

import FilmDetails from "./films-page/film-details/filmDetails.js";
import FilmsPage from "./films-page/filmsPage.js";

const Page = () => (
	<div className="pageWrapper">

		<Links />
		<Routes>

			<Route path="/" element={<Navigate to="/planets" />} />

			{RouterData.map((el) => <Route key={el.id} path={el.path} element={el.element} />)}

			<Route path="/films" element={<FilmsPage />}>
				<Route path=":title" element={<FilmDetails />} />
			</Route>

			<Route path="*" element={<h2>Страница не найдена</h2>} />
		</Routes>

	</div>
);

export default Page;