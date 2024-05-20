import { useState } from "react";
import "./JarFunctions.css";
import depositJar from "../../../images/depositJar.png";
import { doJarDeposit } from "../../../services/jar";

const JarDeposit = function (props) {
  const [amount, setAmount] = useState("");

  const handleClose = () => {
    props.onClose();
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const makeDeposit = function () {
    doJarDeposit(props.jarId, amount);
    handleClose();
  };

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="func_container">
        <div className="jar_container">
          <img className="dep-jar" src={depositJar} alt="depositJar" />
        </div>
        <h2 className="dep_label">Amount</h2>
        <div className="dep_amount_container">
          <input
            className="dep_amount"
            type="number"
            min={1}
            value={amount}
            placeholder="0"
            onChange={handleAmount}
          />
        </div>

        <div className="btn-container">
          <button className="btn btn-pig-deposit" onClick={makeDeposit}>
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};
export default JarDeposit;
