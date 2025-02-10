
const FilmDetails = ({ title, episode_id, opening_crawl, director, producer, release_date }) => {
	return (
		<div className="detailsWrapper">
			<ul className="details__list">
				<li className="list__elem"><span>Название:</span> {title}</li>
				<li className="list__elem"><span>Эпизод:</span> {episode_id}</li>
				<li className="list__elem"><span>Описание:</span> {opening_crawl}</li>
				<li className="list__elem"><span>Режиссер:</span> {director}</li>
				<li className="list__elem"><span>Продюсер:</span> {producer}</li>
				<li className="list__elem"><span>Дата выхода:</span> {release_date}</li>
			</ul>
		</div>
	);
};

export default FilmDetails;