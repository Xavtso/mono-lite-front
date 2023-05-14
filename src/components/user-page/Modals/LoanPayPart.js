import { useState, useEffect } from "react";
import loanImg from "../../../images/loan.png";
import "../../../styles/user-page/LoanFunc.css";
import axios from "axios";

const LoanPayPart = function (props) {
  const [amount, setAmount] = useState(props.vault.monthly_payment);
  const [vault, setVault] = useState([]);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    props.onClose();
  };
  const loadInfo = () => {
    setVault(props.vault);
  };

  useEffect(() => {
    loadInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vault]);

  const payloan = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/loans/pay/part", {
        id: vault.id,
        amount: +amount,
        borrower_id: vault.borrower_id,
      })
      .then((response) => console.log(response))
      .catch((error) => setMessage(error.response.data.message));
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="loanMen-container">
        <img src={loanImg} alt="vaultOpened" className="loanImg" />
      </div>
      <h2 className="replenish-title">Pay Part</h2>
      <div className="input-box">
        <h3 className="input-label">Amount :</h3>
        <input
          type="number"
          min={500.0}
          step={100.0}
          placeholder="500 ₴"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="dep-input"
        />
      </div>
      <h3 className="expected-amount">
        Need to pay : {vault.monthly_payment} ₴
      </h3>
      <p className="alert">{message}</p>
      <div className="btn-container dep-btn-container">
        <button className="btn loan_func" onClick={payloan}>
          Pay
        </button>
      </div>
    </div>
  );
};
export default LoanPayPart;
