import "./JarFunctions.css";
import settings from "../../../images/settings.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectJar } from "../../../store/selectors/jar/selectJar";
import { changeJarCredentials } from "../../../services/jar";

const Settings = function (props) {
  const jar = useSelector(selectJar);
  const [targetSum, setTargetSum] = useState(jar.target_sum);
  const [title, setTitle] = useState(jar.vault_title);

  const handleClose = () => {
    props.onClose();
  };

  const updateJar = () => {
    changeJarCredentials(jar.vault_id, targetSum, title);
    handleClose();
  };

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="jar_container settings">
        <img src={settings} className="settings-image" alt="settingsJar" />
      </div>
      <div className="settings-container">
        <div className="choose-settings">
          <div className="choise ">
            <h3 className="change-title">Change Title</h3>
            <input
              type="text"
              className="change-input"
              placeholder={jar.vault_title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="choise ">
            <h3 className="change-title">Change Target</h3>

            <input
              type="number"
              min={50}
              placeholder={jar.target_sum + "₴"}
              value={targetSum}
              className="change-input"
              onChange={(e) => setTargetSum(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-choice" onClick={updateJar}>
          Save Changes
        </button>
      </div>
    </div>
  );
};
export default Settings;
