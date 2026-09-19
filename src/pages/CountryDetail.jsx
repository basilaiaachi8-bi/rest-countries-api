import { useParams, Link, useNavigate } from "react-router-dom";
import "./CountryDetail.css";

function CountryDetail({ countries }) {
  const { code } = useParams();
  const navigate = useNavigate();

  const country = countries.find((c) => c.cca3 === code);

  if (!country) {
    return (
      <div className="detail-container">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
        <p style={{ marginTop: "2rem" }}>Country not found.</p>
      </div>
    );
  }

  const nativeName = country.name?.nativeName
    ? Object.values(country.name.nativeName)[0]?.common
    : country.name?.common;

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => c.name || c)
        .join(", ")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages)
        .map((l) => l.name || l)
        .join(", ")
    : "N/A";

  const tld = country.tld ? country.tld.join(", ") : "N/A";

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </button>

      <div className="detail-content">
        <div className="detail-flag">
          <img src={country.flags?.png} alt={country.name?.common} />
        </div>

        <div className="detail-info">
          <h2>{country.name?.common}</h2>

          <div className="info-columns">
            <div className="col">
              <p>
                <strong>Native Name:</strong> {nativeName}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population?.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion || "N/A"}
              </p>
              <p>
                <strong>Capital:</strong>{" "}
                {country.capital ? country.capital[0] : "N/A"}
              </p>
            </div>

            <div className="col">
              <p>
                <strong>Top Level Domain:</strong> {tld}
              </p>
              <p>
                <strong>Currencies:</strong> {currencies}
              </p>
              <p>
                <strong>Languages:</strong> {languages}
              </p>
            </div>
          </div>

          <div className="borders-section">
            <strong>Border Countries:</strong>
            <div className="border-tags">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((borderCode) => {
                  const borderCountry = countries.find(
                    (c) => c.cca3 === borderCode,
                  );
                  const borderName = borderCountry
                    ? borderCountry.name.common
                    : borderCode;
                  return (
                    <Link
                      key={borderCode}
                      to={`/country/${borderCode}`}
                      className="border-btn"
                    >
                      {borderName}
                    </Link>
                  );
                })
              ) : (
                <span> None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
