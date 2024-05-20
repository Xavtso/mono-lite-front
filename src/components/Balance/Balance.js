import "./Balance.css";

const Balance = function (props) {
  return (
    <div className="balance">
      <div className="self-balance">
        <span className="balance__label">Balance: </span>
        <span className="balance__value">
          {props.cardInfo.card_balance} <span id="currency">₴</span>
        </span>
      </div>
    </div>
  );
};

export default Balance;
