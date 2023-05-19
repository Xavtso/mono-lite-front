import axios from "axios";
import { useState, useEffect } from "react";
import "../../../styles/user-page/BankDeposit.css";
import miniVault from "../../../images/Mini-Vault.png";
import DepVault from "./DepVault";
import CreateDeposit from "./CreateDeposit";

const DepositBank = function (props) {
  const [deposits, setDeposits] = useState([]);
  const [loader, setLoader] = useState("custom-loader-dep");
  const [accumulated, setAccumulated] = useState("");
  const [vault, setVault] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const id = localStorage.getItem("id");
  const handleClose = function () {
    props.onClose();
  };

  const getDeposits = function () {
    axios
      .get(`https://mono-lite-back.azurewebsites.net/deposits/${id}`)
      .then((response) => setDeposits(response.data.reverse()))
      .catch((error) => console.log(error));
  };

  const calculateTotalDepositBalance = function () {
    const totalBalance = deposits.reduce((acc, val) => acc + val.amount, 0);
    setAccumulated(totalBalance.toFixed(2));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getDeposits();
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
      <DepVault onClose={closeVault} vault={vault} />
    ) : null;
  };

  const renderModal = () => {
    switch (activeModal) {
      case "Create":
        return <CreateDeposit onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="op-modal modal-deposit-bank">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount deposit-amount">
        <span className="dep-title">In Vaults</span>
        
        {accumulated} ₴
      </div>
      <div className="screen screen-deposit-bank">
        <div className="pig-controls">
          <button
            onClick={() => {
              openModal("Create");
            }}
            className="btn pig-btn"
          >
            <p className="btn-icon dep-icon">+</p> Create
          </button>
        </div>
        <h2 className="banka-title">Deposits</h2>
        <div className={loader}></div>
        <div className="vaults">
          {deposits.map((deposit, index) => (
            <div
              key={index}
              className="vault__row"
              onClick={() => setVault(deposit)}
            >
              <div>
                <div className="vault-icon">
                  <img
                    src={miniVault}
                    alt="banka"
                    className="img-small-vault"
                  />
                </div>
              </div>
              <div className="banka-info">
                <p className="banka-name">Deposit 💵📈</p>
                <p className="target_value">{deposit.amount} ₴</p>
                <p className="accum_value">
                  Dividends: {deposit.monthly_payment.toFixed(2)} ₴ / month
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

export default DepositBank;
