import { useState} from "react";
import loanImg from "../../../images/loan.png";
import "./LoanFunc.css";
import { payLoanPart } from "../../../services/loans";

const LoanPayPart = function ({ onClose, vault }) {
  const [amount, setAmount] = useState(vault.monthly_payment);

  const handleClose = () => {
    onClose();
  };
  const handleLoanPay = () => {
    const response = payLoanPart({
      id: vault.id,
      amount: +amount,
      borrower_id: vault.borrower_id,
    });
    response && handleClose();
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
      <div className="btn-container dep-btn-container">
        <button className="btn loan_func" onClick={handleLoanPay}>
          Pay
        </button>
      </div>
    </div>
  );
};
export default LoanPayPart;
