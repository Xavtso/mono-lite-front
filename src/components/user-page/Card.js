import "../../styles/user-page/Card.css";
import logo from "../../images/icon.png";
import mastercard from '../../images/Mastercard-Logo.wine.png'


export default function Card(props) {
  const cardInfo = props.cardInfo

const formatCardNumber = (number) => {
  if (number) {
    
    const cleanedNumber = number.replace(/\D/g, "");
    const formattedNumber = cleanedNumber.match(/.{1,4}/g).join(' ');
    return formattedNumber;
  }
  return "";
};

  return (
    <div className="card">
      <div className="card__info">
        <span className="bank_name">monolite</span>
        <img src={logo} alt="Bankist logo" className="card__logo" id="logo" />
        {/* <div className="card__balance">
          <p className="card__balance-value">{cardInfo.card_balance}₴</p>
          <p className="card__balance-label">Баланс{`${cardInfo.blocked}`}</p>
        </div> */}
        {cardInfo.card_number ? (
          <div className="card__number">
            {formatCardNumber(cardInfo.card_number)}
          </div>
        ) : null}
        <p className="card__name">{`${
          cardInfo.owner_name + " " + cardInfo.owner_surname
          }`}</p>
        <img src={mastercard } alt="mastercard" className="mastercard" />
      </div>
    </div>
  );
}
