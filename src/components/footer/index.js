import React from "react";

//router
import { Link } from "react-router-dom";

//style
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="description">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="socialIcons">
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-telegram"></i>
        </div>
      </div>
      <div className="links">
        <h3>Links</h3>

        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="about">About Us</Link>
      </div>
      <div className="contactUs">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <i className="fa-solid fa-phone"></i>1800-121-3637
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>info@deneb.com
          </li>
          <li>
            <i className="fa-sharp fa-solid fa-location-dot"></i>125, Park
            street aven, Brocklyn, Newyork.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
