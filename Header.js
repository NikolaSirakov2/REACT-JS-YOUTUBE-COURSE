import React from "react";

function Header() {
    return (
      <header>
        <nav className="nav">
          <img src="fitnessLogo.jpg" className="image"/>
          <ul className="head-list">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;