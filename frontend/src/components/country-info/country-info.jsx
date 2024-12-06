import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import countriesService from "../../services/countries.service";
import { Country } from "../common/country";
import { PopulationChart } from "./population-chart";
import "./country-info.styles.css";

const CountryInfo = () => {
  const { code } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setCountry(await countriesService.getCountryInfo(code));
    };

    fetchData();
  }, [code]);

  return (
    <>
      {country && (
        <div>
          <header className="header">
            {country.flagUrl && (
              <img src={country.flagUrl} alt={code} width={100} />
            )}
            <h1 className="country-name">{country.officialName}</h1>
          </header>
          <div className="container">
            <h2 className="title">Region</h2>
            <div>{country.region}</div>
          </div>
          {country.borders && country.borders.length > 0 && (
            <div className="container">
              <h2 className="title">Borders</h2>
              <div className="borders">
                {country.borders.map(border => (
                  <Country
                    country={{
                      name: border.officialName,
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
      )}
    </>
  );
};

export { CountryInfo };
