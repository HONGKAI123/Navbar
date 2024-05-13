import React, { useState } from "react";
import "./Navbar.css";
import NavbarItem from "../NavbarItem/NavbarItem";
import SigninButton from "../SigninButton/SigninButton";
import {
  aboutData,
  pricingData,
  projectsData,
} from "../DropdownMenu/DropdownData";

function Navbar() {
  const [isHamNavVisible, setIsHamNavVisible] = useState<boolean>(false);
  const toggleNavbarHandler = () => {
    setIsHamNavVisible(!isHamNavVisible);
  };
  //   console.log(isHamNavVisible);
  return (
    <div className="navbar-container" aria-label="Main navigation">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
          <h1>Logo</h1>
        </div>
        <div className={`navbar-links ${isHamNavVisible ? "active" : ""}`}>
          <ul>
            <NavbarItem label="HOME" link="#" />
            <NavbarItem label="ABOUT US" link="#" dropDownitems={aboutData} />
            <NavbarItem label="PRICING" link="#" dropDownitems={pricingData} />
            <NavbarItem
              label="PROJECTS"
              link="#"
              dropDownitems={projectsData}
            />
          </ul>
        </div>
        <div className="navbar-sign">
          <NavbarItem label="SIGN UP" link="#" />
          <SigninButton />
        </div>
        <a
          href="#toggle"
          className="navbar-toggle-btn"
          onClick={toggleNavbarHandler}
          aria-haspopup="true"
          aria-controls="navbar-links"
          aria-expanded={isHamNavVisible}
        >
          <span className="navbar-toggle-btn-bar"></span>
          <span className="navbar-toggle-btn-bar"></span>
          <span className="navbar-toggle-btn-bar"></span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
