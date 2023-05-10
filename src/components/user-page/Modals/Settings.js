import "../../../styles/user-page/PigFunctions.css";
import settings from "../../../images/settings.png";
import { useState } from "react";
import axios from "axios";

const Settings = function (props) {
  const [targetSum, setTargetSum] = useState(props.vault.target_sum);
  const [title, setTitle] = useState(props.vault.vault_title);

  const handleClose = () => {
    props.onClose();
  };
  const changeTargetSum = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/piggybank/title", {
        vault_id: props.vault.vault_id,
        vault_title: title,
      })
      .then((response) => response && handleClose())
      .catch((error) => console.log(error));
  };
  const changeTitle = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/piggybank/target", {
        vault_id: props.vault.vault_id,
        target_sum: targetSum,
      })
      .then((response) => response && handleClose())
      .catch((error) => console.log(error));
  };

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="jar_container settings">
        <img src={settings} className="settings-image" alt="settingsJar" />
      </div>
      <div className="choose-settings">
        <div className="choise ">
          <h3 className="change-title">Change Title</h3>
          <input
            type="text"
            className="change-input"
            placeholder={props.vault.vault_title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn btn-choice" onClick={changeTitle}>
            Change
          </button>
        </div>

        <div className="choise ">
          <h3 className="change-title">Change Target</h3>

          <input
            type="number"
            min={50}
            placeholder={props.vault.target_sum}
            value={targetSum}
            className="change-input"
            onChange={(e) => setTargetSum(e.target.value)}
          />
          <button className="btn btn-choice" onClick={changeTargetSum}>
            Change
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
