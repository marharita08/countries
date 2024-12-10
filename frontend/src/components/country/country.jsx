import { Link } from "react-router-dom";

import "./country.styles.css";

const Country = ({ country }) => {
  const { name, countryCode } = country;

  return (
    <Link to={`/countries/${countryCode}`} className="card-country">
      <div className="country">
        <div>{countryCode}</div>
        <div>{name}</div>
      </div>
    </Link>
  );
};

export { Country };
