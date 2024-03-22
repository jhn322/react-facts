import React from "react";
import reactLogo from "./assets/react.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <img className="nav-logo" src={reactLogo} alt="React logo" />
      <h3 className="nav-logo-text">ReactFacts</h3>
      <a href="https://react.dev/" target="_blank" className="nav-title">
        Learn something new!
      </a>
    </nav>
  );
};

export default Navbar;
