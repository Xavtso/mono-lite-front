import { useState } from "react";
import "./JarFunctions.css";
import withdrawJar from "../../../images/withdrawJar.png";
import { doJarWithdraw } from "../../../services/jar";
import { useSelector } from "react-redux";
import { selectJar } from "../../../store/selectors/jar/selectJar";

const Withdraw = function (props) {
  const [amount, setAmount] = useState("");
  const jar = useSelector(selectJar);

  const handleClose = () => {
    props.onClose();
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const makeWithdraw = function () {
    doJarWithdraw(jar.vault_id, +amount);
    handleClose();
  };

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>

      <div className="func_container">
        <div className="jar_container wd-container">
          <img className="jar-img" src={withdrawJar} alt="withdrawJar" />
        </div>

        <h2 className="dep_label with">Amount</h2>

        <div className="dep_amount_container with_amount">
          <div className="allowed_sum">
            You can withdraw : {jar.vault_balance} ₴
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

        <div className="btn-container">
          <button className="btn btn-pig-deposit wd-btn" onClick={makeWithdraw}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};
export default Withdraw;
