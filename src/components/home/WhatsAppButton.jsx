// src/components/WhatsAppButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const WhatsAppButton = () => {
  const phoneNumber = '+919954325690'; // Replace with your WhatsApp phone number
  const message = encodeURIComponent(
    "Hello! I would like to learn more about your website development, e-commerce solutions, and management systems. Could you please provide more details about your services?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-8 z-50 p-3 rounded-full shadow-lg hover:shadow-2xl transition-shadow flex items-center justify-center"
      style={{
        fontSize: "24px",
        background: "rgba(255, 255, 255, 0.2)", // Tinted glass effect
        backdropFilter: "blur(10px)", // Glass effect
        border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for contrast
      }}
    >
      <FaWhatsapp
        style={{
          fontSize: "28px",
          color: "#25d366", // WhatsApp color
          textShadow: `
            0 0 6px rgba(0, 255, 0, 0.8), 
            0 0 12px rgba(0, 255, 0, 0.6), 
            0 0 18px rgba(0, 255, 0, 0.4),
            0 0 24px rgba(0, 255, 0, 0.2)
          `, // Enhanced glowing effect
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
