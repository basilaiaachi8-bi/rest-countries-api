import Controls from "../components/Controls";
import CountryCard from "../components/CountryCard";
import "./Home.css";

function Home({ countries, search, setSearch, region, setRegion, loading }) {
  const filteredCountries = countries.filter((country) => {
    const countryName = country.name?.common || country.name || "";
    const matchesSearch = countryName
      .toLowerCase()
      .includes(search.toLowerCase().trim());

    const countryRegion = country.region || "";
    const matchesRegion =
      region === "" ||
      countryRegion.toLowerCase() === region.toLowerCase() ||
      (region === "Americas" && countryRegion === "Americas");

    return matchesSearch && matchesRegion;
  });

  return (
    <main className="home-container">
      <Controls
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />

      {loading ? (
        <div className="loading">Loading countries...</div>
      ) : filteredCountries.length === 0 ? (
        <div className="loading">No countries found...</div>
      ) : (
        <div className="countries-grid">
          {filteredCountries.map((country, index) => (
            <CountryCard
              key={country.cca3 || country.alpha3Code || index}
              country={country}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;
