const StarshipDetails = ({ name, model, manufacturer, cost_in_credits, passengers, pilots, MGLT, starship_class, hyperdrive_rating, consumables, cargo_capacity, length, crew, max_atmosphering_speed }) => {

	return (
		<div className="detailsWrapper">
			<ul className="details__list">
				<li className="list__elem"><span>Название:</span> {name}</li>
				<li className="list__elem"><span>Модель:</span> {model}</li>
				<li className="list__elem"><span>Производитель:</span> {manufacturer}</li>
				<li className="list__elem"><span>Стоимость в кредитах:</span> {cost_in_credits}</li>
				<li className="list__elem"><span>Длинна:</span> {length}</li>
				<li className="list__elem"><span>Максимальная атмосферная скорость:</span> {max_atmosphering_speed}</li>
				<li className="list__elem"><span>Экипаж:</span> {crew}</li>
				<li className="list__elem"><span>Пассажиры:</span> {passengers}</li>
				<li className="list__elem"><span>Грузоподъемность:</span> {cargo_capacity}</li>
				<li className="list__elem"><span>Расходные материалы:</span> {consumables}</li>
				<li className="list__elem"><span>Рейтинг гипердрайва:</span> {hyperdrive_rating}</li>
				<li className="list__elem"><span>MGLT:</span> {MGLT}</li>
				<li className="list__elem"><span>Звездолет класс:</span> {starship_class}</li>
			</ul>
		</div>
	);
}

export default StarshipDetails;