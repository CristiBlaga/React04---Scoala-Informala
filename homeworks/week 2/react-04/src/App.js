import React from "react";
import Navbar from "./navbar";
import routes from "./routes/index";


function App() {
  return (
    <>
      <Navbar />
      {routes}
    </>
  );
}

export default App;
