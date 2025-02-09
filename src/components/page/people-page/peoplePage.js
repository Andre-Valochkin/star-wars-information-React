import "./peoplePage.css";

import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import PeopleDetails from "./people-details/peopleDetails";

const PeoplePage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedPeople, setSelectedPeople] = useState(null);

	useEffect(() => {

		setLoading(true);

		fetch("https://swapi.dev/api/people/")
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

	const handleFilmClick = (people) => {
		setSelectedPeople(people);
	};

	return (
		<div className="pageContentWrapper">
			<div className="sitebar">
				<ol>
					{data.map((el) => <li className="pageContent__li"><NavLink to="#" onClick={() => handleFilmClick(el)}>{el.name}</NavLink></li>)}
				</ol >
			</div>
			<div className="mainBlock">
				{selectedPeople ? (<PeopleDetails {...selectedPeople} />) : (<h2>Выберите актера для отображения деталей</h2>)}
			</div>
		</div >
	);

}

export default PeoplePage;



