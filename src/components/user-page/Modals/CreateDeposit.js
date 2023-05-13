import "../../../styles/user-page/CreateDeposit.css";
import { useState, useEffect } from "react";
import vault from "../../../images/deposit.png";
import axios from "axios";

const CreateDeposit = function (props) {
  const [month, setMonth] = useState(12);
  const [interest, setInterest] = useState(15);
  const [amount, setAmount] = useState(500);
  const [result, setResult] = useState(0);
  const id = localStorage.getItem("id");
  const handleClose = () => {
    props.onClose();
  };

  const handleMonth = function (e) {
    const action = e.target.id;
    if (month > 3 && action === "reduce") {
      let reduced = month - 1;
      setMonth(reduced);
    }
    if (month < 36 && action === "increase") {
      let increased = month + 1;
      setMonth(increased);
    }
  
    
  };
  
  const handleInterest = function () {
    if (month <= 6 && month >= 4) {
      setInterest(12);
    } else if (month === 3) {
      setInterest(11);
    } else if (month > 6 && month <= 9) {
      setInterest(13);
    } else if (month > 9 && month < 12) {
      setInterest(14);
    } else setInterest(15);

  };

  const calculateResult = function () {
    const calculated = +amount + ((+amount * interest) / 100 / 12) * month;
    setResult(calculated);
  };

  useEffect(() => {
    if (month === 3) {
      document.getElementById("reduce").classList.add("disabled");
    } else {
      document.getElementById("reduce").classList.remove("disabled");
    }

    if (month === 36) {
      document.getElementById("increase").classList.add("disabled");
    } else {
      document.getElementById("increase").classList.remove("disabled");
    }

    calculateResult();
    handleInterest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, interest, amount]);

  const createDeposit = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/deposits", {
        amount: +amount,
        interest_rate: interest / 100,
        user_id: id,
        term: month,
      })
      .then((response) => response && handleClose())
      .catch((error) => console.log(error));
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="Deposit-Vault-Container">
        <img src={vault} alt="DepositVault" className="dep-vault-image" />
      </div>
      <h2 className="create-title">⚙️Options</h2>
      <h2 className="percentage-title">
        Interest Rate 📊 <br />
        <span className="percentage-amount">{interest} %</span>
      </h2>
      <div className="options-container">
        <div className="dep-amount">
          <p className="amount-title">Amount 💵</p>
          <input
            type="number"
            min={500}
            className="amount-input"
            placeholder="500 ₴"
            value={amount}
            required
            step={100}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="dep-term">
          <p className="term-title">Term ⌛</p>
          <div className="term-input">
            <button className="term-btn" id="reduce" onClick={handleMonth}>
              -
            </button>
            <p className="term-label">
              {" "}
              <span className="term-amount">{month} </span> mth
            </p>
            <button className="term-btn" id="increase" onClick={handleMonth}>
              +
            </button>
          </div>
        </div>
      </div>
      <p className="future-receive">You'll receive {result.toFixed(2)} ₴</p>
      <div className="btn-container">
        <button className="btn btn-deposit-create" onClick={createDeposit}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateDeposit;
