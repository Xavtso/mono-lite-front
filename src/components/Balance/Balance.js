import "./Balance.css";

const Balance = function ({ cardInfo }) {
  return (
    <div className="balance">
      <div className="self-balance">
        <span className="balance__label">Balance: </span>
        <span className="balance__value">
          {cardInfo.card_balance?.toFixed(2)} <span id="currency">₴</span>
        </span>
      </div>
    </div>
  );
};

export default Balance;
