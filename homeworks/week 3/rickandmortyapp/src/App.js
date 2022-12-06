import React from "react";
import Navbar from "./components/Navbar/Navbar";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}
export default App;
