import React, { forwardRef, useState } from "react";
import logo from "../../images/logo.png";
import hero from "../../images/hero.png";
import "../../styles/home-page/Header.css";
import "../../styles/home-page/Navbar.css";
import "../../styles/home-page/Button.css";

import AuthForm from "../AuthForm";

const Header = forwardRef((props, ref) => {
  const handleHover = function (e) {
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      const logo = link.closest(".nav").querySelector("img");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };
    
  
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState('');
  const [overlay, setOverlay] = useState('');


  const closeModal = function () { 
    setModal(false);
    setContent('');
    setOverlay('');
  }

  const showModal = function (e) {
    e.preventDefault();
    setModal(true);
    setOverlay('overlay')
    setContent(() => {
      return (
        <AuthForm onHide={closeModal } />
      )
    })
    
  }


  return (
    <header ref={ref} className='header'>
      <nav className="nav">
        <img src={logo} alt="Bankist logo" className="nav__logo" id="logo" />
        <ul className="nav__links">
          <li className="nav__item">
            <a
              className="nav__link"
              href="#section--1"
              onMouseEnter={handleHover.bind(0.5)}
              onMouseLeave={handleHover.bind(1)}
            >
              Features
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="#section--2"
              onMouseEnter={handleHover.bind(0.5)}
              onMouseLeave={handleHover.bind(1)}
            >
              Operations
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link "
              href="#section--3"
              onMouseEnter={handleHover.bind(0.5)}
              onMouseLeave={handleHover.bind(1)}
            >
              Testimonials
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link nav__link--btn btn--show-modal"
              href="/"
              onClick={showModal}
            >
              Open account
            </a>
          </li>
        </ul>
      </nav>
      {content}
      <div className="header__title">
        <h1>
          When {/* Green highlight effect */}
          <span className="highlight">banking</span> meets
          <br />
          <span className="highlight">minimalist</span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        <button className="btn--text btn--scroll-to">Learn more . . .</button>
        <img src={hero} className="header__img" alt="Minimalist bank items" />
      </div>
<div skip={modal} className={`${overlay}`}></div>
    </header>
  );
});

export default Header;
