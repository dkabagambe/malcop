import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "./whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <ReactWhatsapp
        number="+254701903029"
        message="Hey i got your number from malcop exporting company
        !!!"
        className="whatsapp_float"
      >
        <FaWhatsapp className="whatsapp" />
      </ReactWhatsapp>
    </div>
  );
};

export default WhatsApp;
