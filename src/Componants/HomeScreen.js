import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";

function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      {/* Rows */}
    </div>
  );
}

export default Homescreen;
