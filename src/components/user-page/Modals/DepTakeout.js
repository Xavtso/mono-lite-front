import { useState, useEffect } from "react";
import moneyBag from "../../../images/moneyBag.png";
import "../../../styles/user-page/DepFunctions.css";
import axios from "axios";

const DepTakeout = function (props) {
//   const [amount, setAmount] = useState(500);
  const [expected, setExpected] = useState("");
  const [vault, setVault] = useState([]);

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

  useEffect(() => {
    const newExpected = vault.amount + vault.monthly_payment * vault.term
    setExpected(newExpected.toFixed(2));
  }, [ vault]);

  const takeMoney = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/deposits/destroy", {
        id: vault.id,
      })
      .then((response) => response && handleWithdrawClose())
      .catch((error) => console.log(error));
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="vault-container">
        <img src={moneyBag} alt="vaultOpened" className="depMoneyBag" />
      </div>
      <h2 className="replenish-title">Take Out</h2>
      <p className="takeout-question">
        Are you sure you want to take out {Math.ceil(vault.amount)} ₴ now ?
      </p>
      <h3 className="expected-amount">
        You'll lose : {(expected - vault.amount).toFixed(2)} ₴
      </h3>
      <div className="btn-container dep-btn-container">
        <button className="btn dep-btn" onClick={takeMoney}>
          Take Out
        </button>
      </div>
    </div>
  );
};
export default DepTakeout;
