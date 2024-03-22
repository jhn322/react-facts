import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <img className="nav-logo" src="./src/react.png" alt="React logo" />
      <h3 className="nav-logo-text">ReactFacts</h3>
      <a href="https://react.dev/" target="_blank" className="nav-title">
        Learn something new!
      </a>
    </nav>
  );
};

export default Navbar;
