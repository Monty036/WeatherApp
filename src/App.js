import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <h2>Developed by Aman Mohanty</h2>
      </div>
    </React.Fragment>
  );
}

export default App;
