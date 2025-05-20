import React from "react";
import "./About.css";
import { company__photo } from "../../assets";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="column company__photo">
          <img src={company__photo} alt="Jeevan Renewable Energy" />
        </div>
        <div className="column">
          <h3 className="sub__title">With 9+ Years Experience</h3>
          <h1 className="sub__title">
            Turning your <span className="g-text">vision</span> into reality by
            focusing on the basics
          </h1>
          <p className="text__muted description">
            We specialize in delivering high-quality solar energy solutions
            tailored to your needs. Our expert team ensures smooth installation,
            maximum efficiency, and long-term energy savings. Trust us to power
            your future with clean, reliable solar technology.
          </p>
          <div className="group">
            {/* Start Row */}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>
            {/* End Row */}

            {/* Start Row */}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Expert</p>
                <h3>Engineers</h3>
              </div>
            </div>
            {/* End Row */}

            {/* Start Row */}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Customer</p>
                <h3>Support</h3>
              </div>
            </div>
            {/* End Row */}

            {/* Start Row */}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Quality</p>
                <h3>Service</h3>
              </div>
            </div>
            {/* End Row */}
          </div>
          {/* End Group */}

          <div className="buttons__container">
            <Link to="project" smooth={true} className="btn">
              Explore
            </Link>
            <Link to="contact" smooth={true} className="btn btn__primary">
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
