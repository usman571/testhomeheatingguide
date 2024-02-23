import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoilerPage from "./pages/BoilerPage";
import Home from "./pages/Home";
import BoilerDetails from "./components/BoilerDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boiler" element={<BoilerPage />} />
        <Route path="/boilerdetails" element={<BoilerDetails />} />
      </Routes>
    </Router>
  );
}
