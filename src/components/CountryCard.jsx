import { Link } from "react-router-dom";
import "./CountryCard.css";

function CountryCard({ country }) {
  const name = country.name?.common || country.name || "N/A";
  const flag = country.flags?.png || country.flag;
  const population = country.population
    ? country.population.toLocaleString()
    : "N/A";
  const region = country.region || "N/A";
  const capital = Array.isArray(country.capital)
    ? country.capital[0]
    : country.capital || "N/A";
  const code = country.cca3 || country.alpha3Code;

  return (
    <Link to={`/country/${code}`} className="country-card">
      <div className="flag-container">
        <img src={flag} alt={name} />
      </div>
      <div className="card-body">
        <h3 className="country-name">{name}</h3>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
