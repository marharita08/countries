import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Countries } from "./components/countries/Countries";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
