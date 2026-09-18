import { useParams, Link, useNavigate } from "react-router-dom";
import "./CountryDetail.css";

function CountryDetail({ countries = [] }) {
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

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
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
                <strong>Top Level Domain:</strong>{" "}
                {country.tld ? country.tld[0] : "N/A"}
              </p>
            </div>
          </div>

          <div className="borders-section">
            <strong>Border Countries:</strong>
            <div className="border-tags">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((b) => (
                  <Link key={b} to={`/country/${b}`} className="border-btn">
                    {b}
                  </Link>
                ))
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
