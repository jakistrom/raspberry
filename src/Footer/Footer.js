import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="Footer">
      <div className="Footer__items">
        <p>© 2014 Raspberry Kingdom</p>
        <p className="border">Cookies</p>
      </div>
      <div className="Footer__items">
        <p>Privacy</p>
        <p>
          Design by <a href="">Wizard of Oz</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
