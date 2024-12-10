import "./error-display.styles.css";

const ErrorDisplay = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-title">Error</h1>
        <p className="error-message">{message}</p>
      </div>
    </div>
  );
};

export { ErrorDisplay };
