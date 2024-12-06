import { useEffect, useState } from "react";

import countriesService from "../../services/countries.service";
import { Country } from "../common/country";
import "./countries.styles.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCountries(await countriesService.getAvailableCountries());
    };

    fetchData();
  }, []);

  return (
    <div className="countries-container">
      <h1 className="countries-title">Countries</h1>
      {countries.length > 0 && (
        <div className="countries">
          {countries.map(country => (
            <Country country={country} key={country.countryCode} />
          ))}
        </div>
      )}
    </div>
  );
};

export { Countries };
