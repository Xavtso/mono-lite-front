import React from "react";
import Computer from "../../images/digital.jpg";
import grow from "../../images/grow.jpg";
import card from '../../images/card.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {faDesktop,faArrowTrendUp} from '@fortawesome/free-solid-svg-icons'

function Features() {
  return (
    <section className="section" id="section--1">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">
          Everything you need in a modern bank and more.
        </h3>
      </div>

      <div className="features">
        <img src={Computer} alt="Computer" className="features__img lazy-img" />
        <div className="features__feature">
          <div className="features__icon">
            <FontAwesomeIcon icon={faDesktop} style={{ color: "#5EC576" }} />
          </div>
          <h5 className="features__header">100% digital bank</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>

        <div className="features__feature">
          <div className="features__icon">
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              style={{ color: "#5EC576" }}
            />
          </div>
          <h5 className="features__header">Watch your money grow</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>
        <img src={grow} alt="Plant" className="features__img lazy-img" />

        <img src={card} alt="Credit card" className="features__img lazy-img" />
        <div className="features__feature">
          <div className="features__icon">
            <FontAwesomeIcon icon={faCreditCard} style={{ color: "#5EC576" }} />
          </div>
          <h5 className="features__header">Free debit card included</h5>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
