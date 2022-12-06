import React from "react";
import Navbar from "./Components/navbar";
import routes from "./routes";

function App() {
  return (
    <>
      <Navbar />
      {routes}
    </>
  );
}

export default App;
