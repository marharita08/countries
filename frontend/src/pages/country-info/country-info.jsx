import { useParams, Link } from "react-router-dom";

import countriesService from "../../services/countries.service";
import { Country } from "../../components/country/country";
import { PopulationChart } from "../../components/population-chart/population-chart";
import { Loader } from "../../components/loader/loader";
import { ErrorDisplay } from "../../components/error/error-display";
import { useFetchData } from "../../hooks/use-fetch-data";
import "./country-info.styles.css";

const CountryInfo = () => {
  const { code } = useParams();

  const {
    data: country,
    isLoading,
    errorMessage
  } = useFetchData(() => countriesService.getCountryInfo(code), null);

  return (
    <div className="country-info-container">
      {isLoading ? (
        <Loader />
      ) : country ? (
        <div>
          <header className="header">
            <div className="country-header">
              {country.flagUrl && (
                <img src={country.flagUrl} alt={code} width={100} />
              )}
              <h1 className="country-name">{country.officialName}</h1>
            </div>
            <Link className="button" to="/countries">
              Back to Countries
            </Link>
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
        <ErrorDisplay message={errorMessage} />
      )}
    </div>
  );
};

export { CountryInfo };
