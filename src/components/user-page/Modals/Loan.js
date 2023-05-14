import axios from "axios";
import { useState, useEffect } from "react";
import "../../../styles/user-page/Loan.css";
import miniVault from "../../../images/loan-icon.svg";
import LoanVault from "./LoanVault";
import CreateLoan from "./CreateLoan";


const Loan = function (props) {
  const [loans, setLoans] = useState([]);
  const [loader, setLoader] = useState("custom-loader-loan");
  const [accumulated, setAccumulated] = useState("");
  const [vault, setVault] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const id = localStorage.getItem("id");
  const handleClose = function () {
    props.onClose();
  };

  const getLoans = function () {
    axios
      .get(`https://mono-lite-back.azurewebsites.net/loans/${id}`)
      .then((response) => setLoans(response.data))
      .catch((error) => console.log(error));
  };

  const calculateTotalDepositBalance = function () {
    const totalBalance = loans.reduce((acc, val) => acc + val.amount, 0);
    setAccumulated(totalBalance.toFixed(2));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getLoans();
      setLoader("hidden");
      calculateTotalDepositBalance();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const closeModal = () => {
    setActiveModal(null);
  };
  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const closeVault = () => {
    setVault(null);
  };

  const expandVault = function () {
    return vault !== null ? (
      <LoanVault onClose={closeVault} vault={vault} />
    ) : null;
  };

  const renderModal = () => {
    switch (activeModal) {
      case "Create":
        return <CreateLoan onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="op-modal modal-loan">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount piggybank-amount">
        <span className="pig-title">Loan Balance</span>
        <br />
        {accumulated} ₴
      </div>
      <div className="screen screen-loan">
        <div className="pig-controls">
          <button
            onClick={() => {
              openModal("Create");
            }}
            className="btn pig-btn"
          >
            <p className="btn-icon loan-icon">+</p> Create
          </button>
        </div>
        <h2 className="banka-title">Active Loans</h2>
        <div className={loader}></div>
        <div className="vaults">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="vault__row"
              onClick={() => setVault(loan)}
            >
              <div>
                <div className="loan-vault-icon">
                  <img
                    src={miniVault}
                    alt="banka"
                    className="img-small-loan"
                  />
                </div>
              </div>
              <div className="banka-info">
                <p className="banka-name">Loan 💵</p>
                <p className="target_value">{loan.amount} ₴</p>
                <p className="accum_value">
                  Payment: {loan.monthly_payment.toFixed(2)} ₴ / month
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {renderModal()}
      {expandVault()}
    </div>
  );
};

export default Loan;
