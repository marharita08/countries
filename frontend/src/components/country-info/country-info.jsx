import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import countriesService from "../../services/countries.service";
import { Country } from "../countries/country";
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

  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <>
      {country && (
        <div>
          <div className="header">
            <img src={country.flagUrl.data.flag} alt={code} width={100} />
            <div className="country-name">{country.officialName}</div>
          </div>
          <div className="borders-container">
            <div className="borders-title">Borders</div>
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
          <div className="population-container">
            <div className="population-title">Population</div>
            <PopulationChart
              populationCounts={country.population.data.populationCounts}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { CountryInfo };
