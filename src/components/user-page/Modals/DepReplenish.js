import { useState,useEffect } from "react";
import repImg from "../../../images/depReplenish.png";
import "../../../styles/user-page/DepFunctions.css";
import axios from "axios";
const DepReplenish = function (props) {
  const [amount, setAmount] = useState(500);
  const [expected, setExpected] = useState('');
  const [vault, setVault] = useState([]);

  const handleClose = () => {
    props.onClose();
    };
    const loadInfo = () => {
        setVault(props.vault);
    } 
    
    useEffect(() => {
      loadInfo();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vault]);

    useEffect(() => {
        const newAmount = vault.amount + +amount;
        const newExpected = newAmount + +newAmount * vault.interest_rate / 12 * vault.term;
        setExpected(newExpected.toFixed(2));
    }, [amount,vault]);

    const makeDeposit = function () {
        axios.post("https://mono-lite-back.azurewebsites.net/deposits/update", {
            id: vault.id,
            amount: +amount,
            user_id: vault.user_id
        });
    }

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="vault-container">
        <img src={repImg} alt="vaultOpened" className="replenishImg" />
      </div>
      <h2 className="replenish-title">Replenish</h2>
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
      <h3 className="expected-amount">Expected amount : {expected} ₴</h3>
      <div className="btn-container dep-btn-container">
        <button className="btn dep-btn" onClick={makeDeposit}>Deposit</button>
      </div>
    </div>
  );
};
export default DepReplenish;
