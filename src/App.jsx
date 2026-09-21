import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import rawData from "./data.json";

function App() {
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const countries = rawData.map((country) => ({
    cca3: country.alpha3Code,
    name: {
      common: country.name,
      nativeName: country.nativeName
        ? { [country.alpha2Code]: { common: country.nativeName } }
        : undefined,
    },
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital ? [country.capital] : [],
    flags: { png: country.flags?.png || country.flag },
    tld: country.topLevelDomain,
    currencies: country.currencies,
    languages: country.languages,
    borders: country.borders || [],
  }));

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              countries={countries}
              search={search}
              setSearch={setSearch}
              region={region}
              setRegion={setRegion}
              loading={false}
            />
          }
        />
        <Route path="/country/:code" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
