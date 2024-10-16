import { Link } from "react-router-dom";

import "./country.styles.css";

const Country = ({ country }) => {
  const { name, countryCode } = country;

  return (
    <div className="country">
      <div>{countryCode}</div>
      <Link to={`/countries/${countryCode}`} className="card-country-name">{name}</Link>
    </div>
  );
};

export { Country };
