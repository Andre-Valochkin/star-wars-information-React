import "./filmsPage.css";
import FilmDetails from "./film-details/filmDetails";

import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const FilmsPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedFilm, setSelectedFilm] = useState(null);

	useEffect(() => {

		setLoading(true);

		fetch("https://swapi.dev/api/films/")
			.then((Response) => Response.json())
			.then((json) => {
				setData(json.results)
				setLoading(false);
			})

			.catch((error) => {
				console.log("error: ", error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div className="loader"><div className="runner"></div></div>
	};

	return (
		<div className="pageContentWrapper">
			<div className="sitebar">
				<ol>
					{data.map((el) => <li key={el.episode_id} className="pageContent__li"><NavLink to="#" onClick={() => setSelectedFilm(el)}>{el.title}</NavLink></li>)}
				</ol >
			</div>
			<div className="mainBlock">
				{selectedFilm ? <FilmDetails {...selectedFilm} /> : <h2>Выберите фильм для отображения деталей</h2>}
			</div>
		</div >
	);
};

export default FilmsPage;









