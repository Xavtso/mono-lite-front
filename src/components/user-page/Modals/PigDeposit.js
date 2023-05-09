import { useState,useEffect } from "react";
import "../../../styles/user-page/PigFunctions.css";
import axios from "axios";
import depositJar from '../../../images/depositJar.png'


const PigDeposit = function (props) {
  const handleClose = () => {
      props.onClose();
      props.onReturn();
    };
    
    const [vault, setVault] = useState([]);
    const [amount, setAmount] = useState('');

    const updateInfo = () => {
        setVault(props.vault)
    }

    useEffect(() => {
        updateInfo()
    });

    const handleAmount = (e) => {
        setAmount(e.target.value);
    }

  const makeDeposit = function () {
    axios
        .post("https://mono-lite-back.azurewebsites.net/piggybank/deposit", {
            vault_id: vault.vault_id,
            user_id: vault.user_id,
            amount: +amount
      })
      .then((response) => response && handleClose())
      .catch((error) => console.log(error));
    };
    
  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
          </button>
          <div className="func_container">
              <div className="jar_container"><img className="dep-jar" src={depositJar} alt="depositJar"/></div>
              <h2 className="dep_label">Amount</h2>
              <div className="dep_amount_container">
              <input className="dep_amount" type="number" min={0} value={amount} placeholder="0" onChange={handleAmount} />
              </div>
              <div className="btn-container">
              <button className="btn btn-pig-deposit" onClick={makeDeposit}>Deposit</button>
              </div>
          </div>
    </div>
  );
};
export default PigDeposit;
