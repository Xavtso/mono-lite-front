import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vaultImg from "../../../images/vaultOpened.png";
import "../../../styles/user-page/DepVault.css";
import { faCoins, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import DepReplenish from "./DepReplenish";
import DepTakeout from "./DepTakeout";

const DepVault = function (props) {
  const [vault, setVault] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  const updateInfo = () => {
    setVault(props.vault);
  };

  useEffect(() => {
    updateInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vault]);

  const handleClose = () => {
    props.onClose();
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModal = function () {
    switch (activeModal) {
      case "replenish":
        return <DepReplenish vault={vault} onClose={closeModal} />;
      case "takeout":
        return <DepTakeout vault={vault} onClose={closeModal} onWithdraw={handleClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="vault-container">
        <img src={vaultImg} alt="vaultOpened" className="vault-img" />
      </div>
      <div className="vault-info">
        <h2 className="info-title">Info</h2>
        <div className="info-row">
          <h3 className="info-row-title">Deposited :</h3>
          <span className="info-row-value">{vault.amount} ₴</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Interest Rate :</h3>
          <span className="info-row-value">{vault.interest_rate * 100} %</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Term :</h3>
          <span className="info-row-value">{vault.term} mth</span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Dividends :</h3>
          <span className="info-row-value">
            {Math.round(vault.monthly_payment * 100) / 100} ₴ / mth
          </span>
        </div>
        <div className="info-row">
          <h3 className="info-row-title">Expected Amount :</h3>
          <span className="info-row-value">
            {vault.amount +
              ((vault.amount * vault.interest_rate) / 12) * vault.term}{" "}
            ₴
          </span>
        </div>
      </div>
      <div className="vault_functions">
        <button
          className="btn vault_func"
          onClick={() => setActiveModal("replenish")}
        >
          <FontAwesomeIcon
            icon={faCoins}
            className="dep-vault-icon"
            id="coin"
          />
          Replenish
        </button>
        <button
          className=" btn vault_func"
          onClick={() => setActiveModal("takeout")}
        >
          <FontAwesomeIcon icon={faMoneyBill1Wave} className="dep-vault-icon" />
          Take Out
        </button>
      </div>
      {renderModal()}
    </div>
  );
};

export default DepVault;
