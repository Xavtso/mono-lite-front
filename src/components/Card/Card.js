import "./Card.css";
import logo from "../../images/icon.png";
import mastercard from "../../images/Mastercard-Logo.wine.png";
import { formatCardNumber } from "../../utility";

export default function Card({ cardInfo }) {
  return (
    <div className="card">
      <div className="card__info">
        <span className="bank_name">monolite</span>
        <img src={logo} alt="Bankist logo" className="card__logo" id="logo" />
        {cardInfo.card_number ? (
          <div className="card__number">
            {formatCardNumber(cardInfo.card_number)}
          </div>
        ) : null}
        <p className="card__name">{`${
          cardInfo.owner_name + " " + cardInfo.owner_surname
        }`}</p>
        <img src={mastercard} alt="mastercard" className="mastercard" />
      </div>
    </div>
  );
}
