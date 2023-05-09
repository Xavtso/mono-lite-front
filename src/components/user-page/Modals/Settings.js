import "../../../styles/user-page/PigFunctions.css";
import settings from "../../../images/settings.png";
import { useState } from "react";
const Settings = function (props) {
  const handleClose = () => {
    props.onClose();
  };

  const [targetSum, setTargetSum] = useState(0);
  const [title, setTitle] = useState('For');

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="jar_container settings">
        <img src={settings} className="settings-image " alt="settingsJar" />
      </div>
      <div className="choose-settings">
        <div className="choise ">
          <h3 className="change-title">Change Title</h3>
          <input
            type="text"
            className="change-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn btn-choice">Change</button>
        </div>

        <div className="choise ">
          <h3 className="change-title">Change Target</h3>
          <label>{targetSum }</label>
          <input
            type="number"
            min={50}
            value={targetSum}
            className="change-input"
            onChange={(e) => setTargetSum(e.target.value)}
          />
          <button className="btn btn-choice">Change</button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
