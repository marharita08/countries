import { useEffect, useState } from "react";

import countriesService from "../../services/countries.service";
import { Country } from "../common/country/country";
import { Loader } from "../common/loader/loader";
import { ErrorDisplay } from "../common/error/error-display";
import "./countries.styles.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountries(await countriesService.getAvailableCountries());
      } catch {
        setMessage("No countries available.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="countries-container">
      <h1 className="countries-title">Countries</h1>
      {isLoading ? (
        <Loader />
      ) : countries.length > 0 ? (
        <div className="countries">
          {countries.map(country => (
            <Country country={country} key={country.countryCode} />
          ))}
        </div>
      ) : (
        <ErrorDisplay message={message} />
      )}
    </div>
  );
};

export { Countries };
