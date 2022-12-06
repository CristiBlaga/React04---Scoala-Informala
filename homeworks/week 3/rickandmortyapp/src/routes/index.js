import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Episodes from "../components/Pages/Episodes";
import CardDetails from "../components/Cards/CardDetails";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardDetails />} />
      <Route path="/Episodes" element={<Episodes />} />
      <Route path="/Episodes/:id" element={<CardDetails />} />
    </Routes>
  </Router>
);
