import "./planetsPage.css";

import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import PlanetsDetails from "./planet-details/planetDetails";

const PlanetsPage = () => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedPlanet, setSelectedPlanet] = useState(null);

	useEffect(() => {

		setLoading(true);

		fetch("https://swapi.dev/api/planets/")
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

	const handlePlanetClick = (planet) => {
		setSelectedPlanet(planet);
	};


	return (
		<div className="pageContentWrapper">
			<div className="sitebar">
				<ol>
					{data.map((el) => <li key={el.name} className="pageContent__li"><NavLink to="#" onClick={() => handlePlanetClick(el)}>{el.name}</NavLink></li>)}
				</ol >
			</div>
			<div className="mainBlock">
				{selectedPlanet ? (<PlanetsDetails {...selectedPlanet} />) : (<h2>Выберите планету для отображения деталей</h2>)}
			</div>
		</div >
	);
};

export default PlanetsPage;

