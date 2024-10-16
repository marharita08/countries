import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Countries } from "./components/countries/countries";
import { CountryInfo } from "./components/country-info/country-info";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:code" element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
