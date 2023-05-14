import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vaultImg from "../../../images/vaultOpened(loan).png";
import "../../../styles/user-page/LoanFunc.css";
import { faCoins, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import DepReplenish from "./DepReplenish";
import DepTakeout from "./DepTakeout";
import LoanPayPart from "./LoanPayPart";
import LoanPayFull from "./LoanPayFull";

const DepVault = function (props) {
  const [vault, setVault] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  const updateInfo = () => {
    setVault(props.vault);
  };

  useEffect(() => {
    updateInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vault]);

  const handleClose = () => {
    props.onClose();
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModal = function () {
    switch (activeModal) {
      case "part":
        return <LoanPayPart vault={vault} onClose={closeModal} />;
      case "full":
        return (
          <LoanPayFull
            vault={vault}
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
          <span className="info-row-value">{vault.amount} ₴</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Interest Rate :</h3>
          <span className="info-row-value">{vault.interest_rate * 100} %</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Term :</h3>
          <span className="info-row-value">{vault.term} mth</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Payment :</h3>
          <span className="info-row-value">
            {Math.round(vault.monthly_payment * 100) / 100} ₴ / mth
          </span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Amount to pay:</h3>
          <span className="info-row-value">{vault.amount_to_pay} ₴</span>
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
