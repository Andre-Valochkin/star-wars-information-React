import "./starshipsPage.css";

import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import StarshipDetails from "./starships-details/starshipsDetails";

const StarshipsPage = () => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedStarships, setSelectedStarships] = useState(null);

	useEffect(() => {

		setLoading(true);

		fetch("https://swapi.dev/api/starships/")
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

	const handleStarshipsClick = (starships) => {
		setSelectedStarships(starships);
	};

	return (
		<div className="pageContentWrapper">
			<div className="sitebar">
				<ol>
					{data.map((el) => <li key={el.name} className="pageContent__li"><NavLink to="#" onClick={() => handleStarshipsClick(el)}>{el.name}</NavLink></li>)}
				</ol >
			</div>
			<div className="mainBlock">
				{selectedStarships ? (<StarshipDetails {...selectedStarships} />) : (<h2>Выберите корабль для отображения деталей</h2>)}
			</div>
		</div >
	);

}

export default StarshipsPage;


