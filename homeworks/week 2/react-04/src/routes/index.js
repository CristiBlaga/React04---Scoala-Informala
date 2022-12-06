import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  </Router>
);
