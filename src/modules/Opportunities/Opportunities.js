import React, { useState } from "react";
import "./Opportunities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Transfer from "../../components/Transfer";
import Loan from "../../components/Loan";
import CashBack from "../../components/CashBack";
import DepositBank from "../../components/Deposit";
import CloseAccount from "../../components/CloseAccount";
import Piggybank from "../../components/Jar";

import Currency from "../../components/Currency";
import { optionData } from "../../constants/opportunities";
import { createPortal } from "react-dom";

// Modal component with portal
const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <div className="modal-content">{children}</div>
      <div className="overlay" onClick={onClose}></div>
    </>,
    document.body,
  );
};

const Opportunities = function () {
  const [activeModal, setActiveModal] = useState(null);

  const handleSlotClick = (e) => {
    setActiveModal(e.target.id);
  };

  const closeModal = function () {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case "loan":
        return <Loan onClose={closeModal} />;
      case "deposit":
        return <DepositBank onClose={closeModal} />;
      case "transfer":
        return <Transfer onClose={closeModal} />;
      case "cashback":
        return <CashBack onClose={closeModal} />;
      case "jar":
        return <Piggybank onClose={closeModal} />;
      case "closeAccount":
        return <CloseAccount onClose={closeModal} />;
      case "currency":
        return <Currency onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {optionData.map((option) => (
        <div
          key={option.id}
          id={option.id}
          className={`slot ${option.class}`}
          onClick={handleSlotClick}
        >
          <FontAwesomeIcon icon={option.icon} style={{ color: option.color }} />
          {option.title}
        </div>
      ))}
      {activeModal && (
        <Modal onClose={closeModal}>{renderModalContent()}</Modal>
      )}
    </div>
  );
};

export default Opportunities;
