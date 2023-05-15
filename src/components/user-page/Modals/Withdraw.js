import { useState, useEffect } from "react";
import "../../../styles/user-page/PigFunctions.css";
import axios from "axios";
import withdrawJar from '../../../images/withdrawJar.png'

const Withdraw = function (props) {
  const handleClose = () => {
    props.onReturn();
    props.onClose();
  };

  const [vault, setVault] = useState([]);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");


  const updateInfo = () => {
    setVault(props.vault);
  };

  useEffect(() => {
    updateInfo();
  });

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const makeWithdraw = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/piggybank/withdraw", {
        vault_id: vault.vault_id,
        user_id: vault.user_id,
        amount: +amount,
      })
      .then((response) => response && handleClose())
      .catch((error) => setMessage(error.response.data.message));
  };

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="func_container">
        <div className="jar_container"><img className="jar-img" src={withdrawJar} alt='withdrawJar'/></div>
        <h2 className="dep_label with">Amount</h2>
        <div className="dep_amount_container with_amount">
          <div className="allowed_sum">
            You can withdraw : {vault.vault_balance} ₴
          </div>
          <input
            className="dep_amount"
            type="number"
            min={0}
            value={amount}
            placeholder="0"
            onChange={handleAmount}
          />
        </div>
        <p className="alert">{ message}</p>
        <div className="btn-container">
          <button className="btn btn-pig-deposit" onClick={makeWithdraw}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};
export default Withdraw;
