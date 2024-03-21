import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <img
            className="nav-logo"
            src="./src/react.png"
            width="50px"
            alt="React logo"
          />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
