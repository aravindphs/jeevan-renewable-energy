import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/919500362308?text=Hi, I would like to get a quote!",
      "_blank"
    );
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp size={24} />
    </div>
  );
};

export default WhatsAppButton;
