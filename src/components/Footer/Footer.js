import React from "react";
import { FaTelegram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="/docs">Dasturchilar uchun</a>
      <a
        href="https://t.me/Shohzod_Abdusamatov"
        target="_blank"
        style={{ fontSize: "20px" }}
        rel="noreferrer"
      >
        <FaTelegram />
      </a>
    </div>
  );
};

export default Footer;
