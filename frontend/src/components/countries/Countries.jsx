import { useEffect, useState } from "react";

import countriesService from "../../services/countries.service";
import { Country } from "./country";
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
    <>
      {countries.length > 0 && (
        <div className="countries">
          {countries.map(country => (
            <Country country={country} key={country.countryCode} />
          ))}
        </div>
      )}
    </>
  );
};

export { Countries };
