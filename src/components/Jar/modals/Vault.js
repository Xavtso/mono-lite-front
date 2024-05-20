import { useState } from "react";
import "./Vault.css";
import banka from "../../../images/Дизайн без назви (10).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHammer,
  faMoneyBills,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import JarDeposit from "./JarDeposit";
import Withdraw from "./Withdraw";
import Break from "./Break";
import Settings from "./Settings";
import { useSelector } from "react-redux";
import { selectJar } from "../../../store/selectors/jar/selectJar";

const Vault = function (props) {
  const jar = useSelector(selectJar);
  const [activeModal, setActiveModal] = useState(null);
  const handleClose = () => {
    props.onClose();
  };

  const modalClose = () => {
    setActiveModal(null);
  };

  const renderModal = () => {
    switch (activeModal) {
      case "deposit":
        return <JarDeposit onClose={modalClose} jarId={jar.vault_id} />;
      case "withdraw":
        return <Withdraw onClose={modalClose} vault={jar} />;
      case "break":
        return (
          <Break onClose={modalClose} vault={jar} onDeepClose={handleClose} />
        );
      case "settings":
        return (
          <Settings
            onClose={modalClose}
            vault={jar}
            onDeepClose={handleClose}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="vault-modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <h4 className="vault_title">{jar.vault_title}</h4>
      <p className="balance_label">Accumulated</p>
      <p className="vault_balance">{jar.vault_balance} ₴</p>
      <div className="banka-container inVault">
        <img src={banka} alt="banka" className="big-banka" />
        <span className="target">{jar.target_sum} ₴ __</span>
      </div>
      <div className="functions">
        <div className="function" onClick={() => setActiveModal("deposit")}>
          <i className="func_icon">
            <FontAwesomeIcon icon={faPiggyBank} size="xl" />
          </i>{" "}
          Deposit
        </div>
        <div className="function" onClick={() => setActiveModal("withdraw")}>
          <i className="func_icon">
            <FontAwesomeIcon icon={faMoneyBills} size="xl" />
          </i>
          Withdraw
        </div>
        <div className="function" onClick={() => setActiveModal("break")}>
          <i className="func_icon">
            <FontAwesomeIcon icon={faHammer} size="xl" />
          </i>
          Break
        </div>
        {/* <div className="function" onClick={() => setActiveModal("add")}>
          <i className="func_icon">
            <FontAwesomeIcon icon={faUserPlus} size="xl" />
          </i>
          Add
        </div> */}
        <div className="function" onClick={() => setActiveModal("settings")}>
          <i className="func_icon">
            <FontAwesomeIcon icon={faGear} size="xl" />
          </i>
          Settings
        </div>
      </div>
      {renderModal()}
    </div>
  );
};

export default Vault;
