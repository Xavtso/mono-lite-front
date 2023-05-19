import { useState, useEffect } from "react";
import loanFull from "../../../images/loanFull.svg";
import "../../../styles/user-page/LoanFunc.css";
import axios from "axios";

const LoanPayFull = function (props) {
  //   const [amount, setAmount] = useState(500);
  const [vault, setVault] = useState([]);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    props.onClose();
  };

  const handleWithdrawClose = () => {
    props.onWithdraw();
  };
  const loadInfo = () => {
    setVault(props.vault);
  };

  useEffect(() => {
    loadInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vault]);

  const takeMoney = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/loans/pay/full", {
        id: vault.id,
        borrower_id: vault.borrower_id,
        amount: +vault.amount_to_pay,
      })
      .then((response) => response && handleWithdrawClose())
      .catch((error) => setMessage(error.response.data.message));
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="loanMen-container">
        <img src={loanFull} alt="vaultOpened" className="receiptImg" />
      </div>
      <h2 className="replenish-title">Take Out</h2>
      <p className="takeout-question">
        Are you sure you want to pay all sum at once time ?
      </p>
      <h3 className="expected-amount">
        Amount to pay : {vault.amount_to_pay} ₴
      </h3>
      <p className="alert"> {message}</p>
      <div className="btn-container dep-btn-container">
        <button className="btn loan_func" onClick={takeMoney}>
          Pay Off
        </button>
      </div>
    </div>
  );
};
export default LoanPayFull;
