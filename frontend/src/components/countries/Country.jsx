import "./country.styles.css";

const Country = ({ country }) => {
  const { name, countryCode } = country;

  return (
    <div className="country">
      <div>{countryCode}</div>
      <div>{name}</div>
    </div>
  );
};

export { Country };
