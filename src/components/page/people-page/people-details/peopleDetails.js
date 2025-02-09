import "./peopleDetails";

const PeopleDetails = ({ homeworld, gender, birth_year, eye_color, skin_color, hair_color, mass, height, name }) => {

	return (
		<div className="detailsWrapper">
			<ul className="details__list">
				<li className="list__elem"><span>имя:</span> {name}</li>
				<li className="list__elem"><span>рост:</span> {height}</li>
				<li className="list__elem"><span>масса:</span> {mass}</li>
				<li className="list__elem"><span>цвет_волос:</span> {hair_color}</li>
				<li className="list__elem"><span>цвет_кожи:</span> {skin_color}</li>
				<li className="list__elem"><span>цвет_глаз:</span> {eye_color}</li>
				<li className="list__elem"><span>год_рождения:</span> {birth_year}</li>
				<li className="list__elem"><span>пол:</span> {gender}</li>
				<li className="list__elem"><span>домашний:</span> {homeworld}</li>
			</ul>
		</div>
	);
}

export default PeopleDetails;
