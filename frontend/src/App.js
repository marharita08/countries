import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { Countries } from "./pages/countries/countries";
import { CountryInfo } from "./pages/country-info/country-info";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:code" element={<CountryInfo />} />
        <Route path="*" element={<Navigate to="/countries" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
