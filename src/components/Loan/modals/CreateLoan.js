import "./CreateLoan.css";
import { useState } from "react";
import loanMen from "../../../images/loanMen.png";
import { createLoan } from "../../../services/loans";

const CreateLoan = function (props) {
  const [month, setMonth] = useState(12);
  const [amount, setAmount] = useState(10000);
  const id = localStorage.getItem("id");
  const handleClose = () => {
    props.onClose();
  };

  const increaseMonth = () => {
    setMonth((prevState) => prevState + 1);
  };
  const decreaseMonth = () => {
    setMonth((prevState) => prevState - 1);
  };

  const handleCreateLoan = function () {
    const data = {
      amount: amount,
      interest_rate: 8 / 100,
      borrower_id: id,
      term: month,
    };
    const response = createLoan(data);
    response && handleClose();
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="loanMen-container">
        <img src={loanMen} alt="LoanMen" className="loan-vault-image" />
      </div>
      <h2 className="create-title">⚙️Options</h2>
      <h2 className="percentage-title">
        Interest Rate 📊 <br />
        <span className="percentage-amount">8 %</span>
      </h2>
      <div className="options-container">
        <div className="dep-amount">
          <p className="amount-title">Amount 💵</p>
          <input
            type="number"
            min={10000}
            className="amount-input"
            placeholder="10000 ₴"
            value={amount}
            required
            step={1000}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="dep-term">
          <p className="term-title">Term ⌛</p>
          <div className="term-input">
            <button
              className="loan-btn"
              disabled={month <= 6}
              id="reduce"
              onClick={decreaseMonth}
            >
              -
            </button>
            <p className="term-label">
              {" "}
              <span className="term-amount">{month} </span> mth
            </p>
            <button
              className="loan-btn"
              disabled={month >= 32}
              id="increase"
              onClick={increaseMonth}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn-take-loan" onClick={handleCreateLoan}>
          Take Loan
        </button>
      </div>
    </div>
  );
};

export default CreateLoan;
