import { Button } from "@mui/material";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="mainPage">
        <div id="buttons">
          <Button variant="contained">Sign in</Button>
          <Button variant="contained">Contact</Button>
        </div>
      </div>
    </>
  );
}
