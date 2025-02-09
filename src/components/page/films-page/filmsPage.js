import "./filmsPage.css";
// import FilmDetails from "./film-details/filmDetails.js";

import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import FilmDetails from "./film-details/filmDetails";


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
	}

	const handleFilmClick = (film) => {
		setSelectedFilm(film);
	};

	return (
		<div className="pageContentWrapper">
			<div className="sitebar">
				<ol>
					{data.map((el) => <li className="pageContent__li"><NavLink to="#" onClick={() => handleFilmClick(el)}>{el.title}</NavLink></li>)}
				</ol >
			</div>
			<div className="mainBlock">
				{selectedFilm ? (<FilmDetails {...selectedFilm} />) : (<h2>Выберите фильм для отображения деталей</h2>)}
			</div>
		</div >
	);
}

export default FilmsPage;



