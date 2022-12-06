import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EpisodeDetails from "../Components/episodeDetails";
import SignUp from "../Components/SignUpForm";
import SignIn from "../Components/SignIn";
import Episodes from "../Components/episodes";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episodes/:id" element={<EpisodeDetails />} />
    </Routes>
  </Router>
);
