import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vaultImg from "../../../images/vaultOpened(loan).png";
import "./LoanFunc.css";
import { faCoins, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import LoanPayPart from "./LoanPayPart";
import LoanPayFull from "./LoanPayFull";
import { useDispatch, useSelector } from "react-redux";
import { getLoansThunk } from "../../../services/loans";

const DepVault = function (props) {
  const { loan } = useSelector((state) => state.loans);
  const [activeModal, setActiveModal] = useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    props.onClose();
  };

  useEffect(() => {
    dispatch(getLoansThunk());
  }, [dispatch]);

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModal = function () {
    switch (activeModal) {
      case "part":
        return <LoanPayPart vault={loan} onClose={closeModal} />;
      case "full":
        return (
          <LoanPayFull
            vault={loan}
            onClose={closeModal}
            onWithdraw={handleClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="loanMen-container">
        <img src={vaultImg} alt="vaultOpened" className="vault-loan-img" />
      </div>
      <div className="vault-info">
        <h2 className="info-title">Info</h2>
        <div className="info-row">
          <h3 className="info-row-title">Borrowed :</h3>
          <span className="info-row-value">{loan.amount} ₴</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Interest Rate :</h3>
          <span className="info-row-value">{loan.interest_rate * 100} %</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Term :</h3>
          <span className="info-row-value">{loan.term} mth</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Payment :</h3>
          <span className="info-row-value">
            {Math.round(loan.monthly_payment * 100) / 100} ₴ / mth
          </span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Amount to pay:</h3>
          <span className="info-row-value">{loan.amount_to_pay} ₴</span>
        </div>
      </div>
      <div className="vault_functions">
        <button
          className="btn loan_func"
          onClick={() => setActiveModal("part")}
        >
          <FontAwesomeIcon
            icon={faCoins}
            className="dep-vault-icon"
            id="coin"
          />
          Pay Part
        </button>
        <button
          className=" btn loan_func"
          onClick={() => setActiveModal("full")}
        >
          <FontAwesomeIcon icon={faMoneyBill1Wave} className="dep-vault-icon" />
          Pay Off
        </button>
      </div>
      {renderModal()}
    </div>
  );
};

export default DepVault;
