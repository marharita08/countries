import countriesService from "../../services/countries.service";
import { Country } from "../../components/country/country";
import { Loader } from "../../components/loader/loader";
import { ErrorDisplay } from "../../components/error/error-display";
import { useFetchData } from "../../hooks/use-fetch-data";
import "./countries.styles.css";

const Countries = () => {
  const {
    data: countries,
    isLoading,
    errorMessage
  } = useFetchData(countriesService.getAvailableCountries, []);

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
        <ErrorDisplay message={errorMessage} />
      )}
    </div>
  );
};

export { Countries };
