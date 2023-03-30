import React from "react";
import '../../styles/home-page/Footer.css'
import icon from '../../images/icon.png'

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <p className="footer__link" >
            About
          </p>
        </li>
        <li className="footer__item">
          <p className="footer__link" >
            Pricing
          </p>
        </li>
        <li className="footer__item">
          <p className="footer__link" >
            Terms of Use
          </p>
        </li>
        <li className="footer__item">
          <p className="footer__link" >
            Privacy Policy
          </p>
        </li>
        <li className="footer__item">
          <p className="footer__link" >
            Careers
          </p>
        </li>
        <li className="footer__item">
          <p className="footer__link" >
            Blog
          </p>
        </li>
        <li className="footer__item">
          <p className="footer__link" >
            Contact Us
          </p>
        </li>
      </ul>
      <img src={icon} alt="Logo" className="footer__logo" />
      <p className="footer__copyright">
        © Copyright by
        <a
          className="footer__link twitter-link"
       
          href="https://www.instagram.com/v_havrona/"
        >
          Vitaliy Havrona
        </a>
        . Don't claim as your own product.
      </p>
    </footer>
  );
}

export default Footer;
