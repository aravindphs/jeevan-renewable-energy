import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { solar__skyscraper } from "../../assets/";
import SolarSystem from "../SolarSystem/SolarSystem";

const Header = () => {
  return (
    <header id="header">
      <div className="system__wrapper">
        <SolarSystem />
      </div>
      <div className="container full__height blur-effect">
        <div className="column">
          <h1 className="title">
            Complete Solar Solutions for{" "}
            <span className="g-text">Home, Business & Industry</span>
          </h1>
          <p className="text__muted">
            At <span className="g-text">Jeevan Renewable Energy</span>, we offer
            expert solar installation services designed to save you money and
            protect the environment. From consultation to installation, we make
            switching to clean, renewable energy simple and affordable. Start
            your journey toward a greener future today!
          </p>
          <div className="buttons__container">
            <Link to="services" className="btn">
              Our Services
            </Link>
            <Link to="contact" className="btn btn__primary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="column">
          <div className="image__container primary-effect">
            <img src={solar__skyscraper} alt="Jeevan Renewable Energy" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
