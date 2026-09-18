import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

const dummyCountries = [
  {
    cca3: "GEO",
    name: { common: "Georgia", nativeName: { kat: { common: "საქართველო" } } },
    population: 3717100,
    region: "Europe",
    capital: ["Tbilisi"],
    flags: { png: "https://flagcdn.com/w320/ge.png" },
    subregion: "Western Asia",
    tld: [".ge"],
    currencies: { GEL: { name: "Georgian lari" } },
    languages: { kat: "Georgian" },
    borders: ["ARM", "AZE", "RUS", "TUR"],
  },
  {
    cca3: "ESP",
    name: { common: "Spain", nativeName: { spa: { common: "España" } } },
    population: 47351567,
    region: "Europe",
    capital: ["Madrid"],
    flags: { png: "https://flagcdn.com/w320/es.png" },
    subregion: "Southern Europe",
    tld: [".es"],
    currencies: { EUR: { name: "Euro" } },
    languages: { spa: "Spanish" },
    borders: ["FRA", "PRT"],
  },
  {
    cca3: "CAN",
    name: {
      common: "Canada",
      nativeName: { eng: { common: "Canada" }, fra: { common: "Canada" } },
    },
    population: 38005238,
    region: "Americas",
    capital: ["Ottawa"],
    flags: { png: "https://flagcdn.com/w320/ca.png" },
    subregion: "Northern America",
    tld: [".ca"],
    currencies: { CAD: { name: "Canadian dollar" } },
    languages: { eng: "English", fra: "French" },
    borders: ["USA"],
  },
  {
    cca3: "JPN",
    name: { common: "Japan", nativeName: { jpn: { common: "日本" } } },
    population: 125800000,
    region: "Asia",
    capital: ["Tokyo"],
    flags: { png: "https://flagcdn.com/w320/jp.png" },
    subregion: "Eastern Asia",
    tld: [".jp"],
    currencies: { JPY: { name: "Japanese yen" } },
    languages: { jpn: "Japanese" },
    borders: [],
  },
  {
    cca3: "ITA",
    name: { common: "Italy", nativeName: { ita: { common: "Italia" } } },
    population: 58870762,
    region: "Europe",
    capital: ["Rome"],
    flags: { png: "https://flagcdn.com/w320/it.png" },
    subregion: "Southern Europe",
    tld: [".it"],
    currencies: { EUR: { name: "Euro" } },
    languages: { ita: "Italian" },
    borders: ["FRA"],
  },
  {
    cca3: "DEU",
    name: { common: "Germany", nativeName: { deu: { common: "Deutschland" } } },
    population: 83240525,
    region: "Europe",
    capital: ["Berlin"],
    flags: { png: "https://flagcdn.com/w320/de.png" },
    subregion: "Western Europe",
    tld: [".de"],
    currencies: { EUR: { name: "Euro" } },
    languages: { deu: "German" },
    borders: ["FRA", "POL", "ESP"],
  },
  {
    cca3: "FRA",
    name: { common: "France", nativeName: { fra: { common: "France" } } },
    population: 67390000,
    region: "Europe",
    capital: ["Paris"],
    flags: { png: "https://flagcdn.com/w320/fr.png" },
    subregion: "Western Europe",
    tld: [".fr"],
    currencies: { EUR: { name: "Euro" } },
    languages: { fra: "French" },
    borders: ["DEU", "ITA", "ESP"],
  },
  {
    cca3: "USA",
    name: { common: "United States of America" },
    population: 323947000,
    region: "Americas",
    capital: ["Washington, D.C."],
    flags: { png: "https://flagcdn.com/w320/us.png" },
    subregion: "Northern America",
    tld: [".us"],
    currencies: { USD: { name: "United States dollar" } },
    languages: { eng: "English" },
    borders: ["CAN"],
  },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              countries={dummyCountries}
              search={search}
              setSearch={setSearch}
              region={region}
              setRegion={setRegion}
              loading={false}
            />
          }
        />
        <Route
          path="/country/:code"
          element={<CountryDetail countries={dummyCountries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
