const PlanetsDetails = ({ name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population }) => {

	return (
		<div className="detailsWrapper">
			<ul className="details__list">
				<li className="list__elem"><span>Название:</span> {name}</li>
				<li className="list__elem"><span>Период замены:</span> {rotation_period}</li>
				<li className="list__elem"><span>Орбитальный период:</span> {orbital_period}</li>
				<li className="list__elem"><span>Диаметр:</span> {diameter}</li>
				<li className="list__elem"><span>Климат:</span> {climate}</li>
				<li className="list__elem"><span>Гравитация:</span> {gravity}</li>
				<li className="list__elem"><span>Местность :</span> {terrain}</li>
				<li className="list__elem"><span>Поверхностные воды:</span> {surface_water}</li>
				<li className="list__elem"><span>Население:</span> {population}</li>
			</ul>
		</div>
	);
}

export default PlanetsDetails;