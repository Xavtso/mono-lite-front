import loanFull from "../../../images/loanFull.svg";
import { payLoanFull } from "../../../services/loans";
import "./LoanFunc.css";

const LoanPayFull = function ({ onClose, vault, onWithdraw }) {
  const handlePayment = () => {
    const response = payLoanFull({
      id: vault.id,
      borrower_id: vault.borrower_id,
      amount: +vault.amount_to_pay,
    });
    response && onWithdraw();
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={() => onClose()}>
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
      <div className="btn-container dep-btn-container">
        <button className="btn loan_func" onClick={handlePayment}>
          Pay Off
        </button>
      </div>
    </div>
  );
};
export default LoanPayFull;
