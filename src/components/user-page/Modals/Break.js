import "../../../styles/user-page/PigFunctions.css";
import brokenJar from "../../../images/BrokenJar.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Break = function (props) {
  const [vault, setVault] = useState([]);

  const loadInfo = () => {
    setVault(props.vault);
  };

  useEffect(() => {
    loadInfo();
  });
  const handleDeepClose = () => {
    props.onDeepClose();
  };

  const handleClose = () => {
    props.onClose();
  };

  const breakJar = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/piggybank/break", {
        vault_id: vault.vault_id,
        user_id: vault.user_id,
      })
      .then((response) => response && handleDeepClose())
      .catch((error) => console.log(error));
  };

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="jar_container broken">
        <img className="broken-Img-Jar" src={brokenJar} alt="brokenJar" />
      </div>
      <h2 className="break-title">Are you sure ?</h2>
      <p className="lefted_amount">
        Amount you'll receive: {vault.vault_balance} ₴
      </p>
      <div className="btn-container break-btn-container">
        <button className="btn break-btn" onClick={breakJar}>
          Break
        </button>
      </div>
    </div>
  );
};
export default Break;
