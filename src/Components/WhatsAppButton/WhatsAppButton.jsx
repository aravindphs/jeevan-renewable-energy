import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/919500362308?text=Hi, I would like to get a quote!", "_blank");
  };

  return (
    <div className="whatsapp-button btn" onClick={handleClick}>
      <div className="icon">💬</div>
      <span className="text">Get Quote</span>
    </div>
  );
};

export default WhatsAppButton;