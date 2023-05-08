import { useState, useEffect } from "react";
import "../../../styles/user-page/Vault.css";
import banka from "../../../images/Дизайн без назви (10).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHammer, faMoneyBills, faPiggyBank, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import PigDeposit from "./PigDeposit";
import Withdraw from "./Withdraw";
import Break from "./Break";
import Add from "./Add";
import Settings from "./Settings";

const Vault = function (props) {
  const [vault, setVault] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const handleClose = () => {
    props.onClose();
  };
  //  eslint-disable-next-line react-hooks/exhaustive-deps
  const updateInfo = function () {
    setVault(props.vault);
  };

  const modalClose = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    updateInfo();
  }, [updateInfo]);

  const renderModal = () => {
    switch (activeModal) {
      case "deposit":
        return <PigDeposit onClose={modalClose} vault={vault} onReturn={updateInfo} />;
      case "withdraw":
        return <Withdraw onClose={modalClose} vault={vault} />;
      case "break":
        return <Break onClose={modalClose} vault={vault} />;
      case "add":
        return <Add onClose={modalClose} vault={vault} />;
      case "settings":
        return <Settings onClose={modalClose} vault={vault} />;

      default:
        return null;
    }
  };

  return (
    <div className="vault-modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <h4 className="vault_title">{vault.vault_title}</h4>
      <p className="balance_label">Accumulated</p>
      <p className="vault_balance">{vault.vault_balance} ₴</p>
      <div className="banka-container inVault">
        <img src={banka} alt="banka" className="big-banka" />
        <span className="target">{vault.target_sum} $ __</span>
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
        <div className="function" onClick={() => setActiveModal("add")}>
          <i className="func_icon">
            <FontAwesomeIcon icon={faUserPlus} size="xl" />
          </i>
          Add
        </div>
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
