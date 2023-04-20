import React, { useState } from "react";
import "../../styles/user-page/Opportunities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillTrendUp,
  faSackDollar,
  faCircleInfo,
  faWallet,
  faPiggyBank,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Transfer from "./Transfer";
import Loan from "./Loan";
import CashBack from "./Cashback";
import DepositBank from "./Deposit-bank";
import CloseAccount from "./CloseAccount";
import Piggybank from "./Piggybank";
import "../../styles/user-page/Modals.css";
import { useNavigate } from "react-router-dom";

const Opportunities = function () {
  const [activeModal, setActiveModal] = useState(null);
  const [overlay, setOverlay] = useState("");

  const handleSlotClick = (modalName) => {
    setActiveModal(modalName);
    setOverlay('overlay');
  };

  const closeModal = function () {
    setActiveModal(null)
    setOverlay('')
  }


  const renderModal = () => {
    switch (activeModal) {
      case "Loan":
        return <Loan onClose={closeModal} />;
      case "Deposit_bank":
        return <DepositBank onClose={closeModal} />;
      case "Transfer":
        return <Transfer onClose={closeModal} />;
      case "CashBack":
        return <CashBack onClose={closeModal} />;
      case "PiggyBank":
        return <Piggybank onClose={closeModal} />;
      case "CloseAccount":
        return <CloseAccount onClose={closeModal} />;
      default:
        return null;
    }
  };
  const navigate = useNavigate();
  const navigateTo = function () {
    navigate("/tech-about");
  };

  return (
    <div className="container">
      <div className="slot loan" onClick={() => handleSlotClick("Loan")}>
        <FontAwesomeIcon icon={faWallet} style={{ color: "#4141ff" }} />
        Loan
      </div>
      <div
        className="slot deposit"
        onClick={() => handleSlotClick("Deposit_bank")}
      >
        <FontAwesomeIcon
          icon={faMoneyBillTrendUp}
          style={{ color: "lightgreen" }}
        />
        Deposits
      </div>
      <div
        className="slot transfer"
        onClick={() => handleSlotClick("Transfer")}
      >
        <FontAwesomeIcon
          icon={faMoneyBillTransfer}
          style={{ color: "lightgreen" }}
        />
        Transfer
      </div>
      <div
        className="slot cashback"
        onClick={() => handleSlotClick("CashBack")}
      >
        <FontAwesomeIcon
          icon={faSackDollar}
          style={{ color: "rgb(246, 209, 161)" }}
        />
        Cash Back
      </div>
      <div
        className="slot piggy-bank"
        onClick={() => handleSlotClick("PiggyBank")}
      >
        <FontAwesomeIcon icon={faPiggyBank} style={{ color: "#ff69b4" }} />
        Piggy Bank
      </div>
      <div
        className="slot close-account"
        onClick={() => handleSlotClick("CloseAccount")}
      >
        <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ff0000" }} /> Close
        Account
      </div>
      <div className="slot info" onClick={navigateTo}>
        <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#eee" }} />
        Info
      </div>
      {renderModal()}
      <div onClick={closeModal} className={`${overlay}`}></div>
    </div>
  );
};

export default Opportunities;
