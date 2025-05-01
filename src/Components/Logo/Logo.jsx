import React from "react";
import "./Logo.css";
import { PiSolarPanelFill } from "react-icons/pi";
import LogoJRE from "./logologo.png";

const Logo = () => {
  return (
    <div className="logo">
      {/* <PiSolarPanelFill className="icon" />
      <h1 className="name">
        JR<span className="color__primary">Energy</span>
      </h1> */}
      <img src={LogoJRE} className="icon" alt="" />
    </div>
  );
};

export default Logo;
