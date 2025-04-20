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
            Revolutionary Home <span className="g-text">Solar System</span>
          </h1>
          <p className="text__muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            libero ipsum eum doloremque laudantium, ad autem cupiditate, nobis
            repellendus aut quibusdam voluptatum, eligendi unde esse veritatis
            maxime. Autem, odio ducimus?
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
