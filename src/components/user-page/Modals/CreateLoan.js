import "../../../styles/user-page/CreateLoan.css";
import { useState, useEffect } from "react";
import loanMen from "../../../images/loanMen.png";
import axios from "axios";

const CreateLoan = function (props) {
  const [month, setMonth] = useState(12);
  const [amount, setAmount] = useState(10000);
  const [message, setMessage] = useState("");
  const id = localStorage.getItem("id");
  const handleClose = () => {
    props.onClose();
  };

  const handleMonth = function (e) {
    const action = e.target.id;
    if (month > 6 && action === "reduce") {
      let reduced = month - 1;
      setMonth(reduced);
    }
    if (month < 36 && action === "increase") {
      let increased = month + 1;
      setMonth(increased);
    }
  };

  useEffect(() => {
    if (month === 6) {
      document.getElementById("reduce").classList.add("disabled");
    } else {
      document.getElementById("reduce").classList.remove("disabled");
    }

    if (month === 36) {
      document.getElementById("increase").classList.add("disabled");
    } else {
      document.getElementById("increase").classList.remove("disabled");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month]);

  const createDeposit = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/loans/new", {
        amount: +amount,
        interest_rate: 8 / 100,
        borrower_id: id,
        term: month,
      })
      .then((response) => response && handleClose())
      .catch((error) => setMessage(error.response.data.message));
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
            <button className="loan-btn" id="reduce" onClick={handleMonth}>
              -
            </button>
            <p className="term-label">
              {" "}
              <span className="term-amount">{month} </span> mth
            </p>
            <button className="loan-btn" id="increase" onClick={handleMonth}>
              +
            </button>
          </div>
        </div>
      </div>
      <p className="alert">{message}</p>
      <div className="btn-container">
        <button className="btn btn-take-loan" onClick={createDeposit}>
          Take Loan
        </button>
      </div>
    </div>
  );
};

export default CreateLoan;
