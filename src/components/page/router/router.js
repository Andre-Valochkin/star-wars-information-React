import FilmsPage from "../films-page/filmsPage";
import PeoplePage from "../people-page/peoplePage";
import PlanetsPage from "../planets-page/planetsPage";
import StarshipsPage from "../starships-page/starshipsPage";
import FilmDetails from "../films-page/film-details/filmDetails";

const RouterData = [
	{ id: 1, path: "/films", element: <FilmsPage /> },
	{ id: 2, path: "/people", element: <PeoplePage /> },
	{ id: 3, path: "/planets", element: <PlanetsPage /> },
	{ id: 4, path: "/starships", element: <StarshipsPage /> },
	{ id: 5, path: "/films/:title", element: <FilmDetails /> }
]
export default RouterData;