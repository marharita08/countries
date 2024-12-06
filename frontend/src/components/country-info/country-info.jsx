import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import countriesService from "../../services/countries.service";
import { Country } from "../common/country/country";
import { PopulationChart } from "./population-chart";
import "./country-info.styles.css";
import { Loader } from "../common/loader/loader";
import { ErrorDisplay } from "../common/error/error-display";

const CountryInfo = () => {
  const { code } = useParams();
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountry(await countriesService.getCountryInfo(code));
      } catch {
        setMessage(`Data for country ${code} not found`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [code]);

  return (
    <div className="country-info-container">
      {isLoading ? (
        <Loader />
      ) : country ? (
        <div>
          <header className="header">
            {country.flagUrl && (
              <img src={country.flagUrl} alt={code} width={100} />
            )}
            <h1 className="country-name">{country.officialName}</h1>
          </header>
          <div className="common-info">
            <div className="container">
              <h2 className="title">Common Name</h2>
              <div className="info">{country.commonName}</div>
            </div>
            <div className="container">
              <h2 className="title">Region</h2>
              <div className="info">{country.region}</div>
            </div>
          </div>
          {country.borders && country.borders.length > 0 && (
            <div className="container">
              <h2 className="title">Borders</h2>
              <div className="borders info">
                {country.borders.map(border => (
                  <Country
                    country={{
                      name: border.commonName,
                      countryCode: border.countryCode
                    }}
                    key={border.countryCode}
                  />
                ))}
              </div>
            </div>
          )}
          {country.population && (
            <div className="container">
              <h2 className="title">Population</h2>
              <PopulationChart populationCounts={country.population} />
            </div>
          )}
        </div>
      ) : (
        <ErrorDisplay message={message} />
      )}
    </div>
  );
};

export { CountryInfo };
