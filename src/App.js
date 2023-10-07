import "./styles.css";
import { Route, Routes, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Countries } from "/src/pages/Countries";
import { TouristPlaces } from "/src/pages/TouristPlaces";
import { Destination } from "/src/pages/Destination";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Trip Advisor</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:continentID" element={<Countries />} />
        <Route
          path="/tourist_places/:continentID/:countryID"
          element={<TouristPlaces />}
        />
        <Route
          path="/destination/:continentID/:countryID/:destinationID"
          element={<Destination />}
        />
      </Routes>
    </div>
  );
}
