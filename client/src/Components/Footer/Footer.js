import React from "react";
import img from "../../hot-onion-restaurent-resources/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-top-img">
            <img src={img} alt="logo" />
          </div>
          <ul className="ul1">
            <li>
              <a href="/">About Online Food</a>
            </li>
            <li>
              <a href="/">Read our blog</a>
            </li>
            <li>
              <a href="/">Sign up to deliver</a>
            </li>
            <li>
              <a href="/">Add your restaurant</a>
            </li>
          </ul>
          <ul className="ul2">
            <li>
              <a href="/">Get help</a>
            </li>
            <li>
              <a href="/">Read FAQc</a>
            </li>
            <li>
              <a href="/">View all cities</a>
            </li>
            <li>
              <a href="/">Restaurants near me</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <small>CopyRight @ 2020 online food</small>
          <div className="footer-bottom-a">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
            <a href="/">Pricing</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
