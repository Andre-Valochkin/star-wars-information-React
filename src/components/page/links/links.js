import "./links.css";
import { NavLink } from "react-router-dom";

const Links = () => (
	<div className="linksWrapper">
		<NavLink className="links__link" to="/films">Фильмы</NavLink>
		<NavLink className="links__link" to="/people">Актеры</NavLink>
		<NavLink className="links__link" to="/planets">Планеты</NavLink>
		<NavLink className="links__link" to="/starships">Звездолеты</NavLink>
	</div>
);

export default Links;