import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banka from "../../../images/Дуже Мала Банка.png";
import "../../../styles/user-page/PiggyBank.css";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import CreatePigyyModal from "./CreatePigyyModal";

const Piggybank = function (props) {
  const id = localStorage.getItem("id");
  const [vaults, setVaults] = useState([]);
  const [loader, setLoader] = useState("custom-loader-pig");
  const [activeModal, setActiveModal] = useState(null);


  const updateVaults = function () {
    axios
      .get(`https://mono-lite-back.azurewebsites.net/piggybank/${id}`)
      .then((response) => {
        const sorted = response.data.sort((a, b) => {
          let nameA = a.vault_title.toUpperCase();
          let nameB = b.vault_title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        setVaults(sorted);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateVaults();
      setLoader("hidden");
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const handleClose = function () {
    props.onClose();
  };


  const closeModal = () => {
    setActiveModal(null);
  }

  const openModal = (modal) => {
    setActiveModal(modal);
  }
  
   const renderModal = () => {
     switch (activeModal) {
       case "Create":
         return <CreatePigyyModal onClose={closeModal} />;
      //  case "Statistic":
      //    return <DepositBank onClose={closeModal} />;
      //  case "User":
      //    return <Transfer onClose={closeModal} />;
       default:
         return null;
     }
   };
  




  return (
    <div className="op-modal modal-piggybank">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount piggybank-amount">
        <span className="pig-title">Accumulated</span>
        <br />
        102 ₴
      </div>
      <div className="screen screen-piggybank">
        <div className="pig-controls">
          <button onClick={() => openModal('Create')} className="btn pig-btn">
            <p className="btn-icon">+</p> Create
          </button>
          <button className="btn pig-btn">
            <p className="btn-icon">
              <FontAwesomeIcon icon={faChartSimple} />
            </p>{" "}
            History
          </button>
        </div>
        <h2 className="banka-title">Vaults</h2>
        <div className={loader}></div>
        <div className="vaults">
          {vaults.map((vault, index) => (
            <div key={index} className="vault__row">
              <div>
                <div className="banka-icon">
                  <img src={banka} alt="banka" className="img-small-banka" />
                </div>
              </div>
              <div className="banka-info">
                <p className="banka-name">{vault.vault_title}</p>
                <div className="banka-input">
                  <input type="range" className="banka-range" />
                  <div
                    className="progress"
                    style={{
                      width:
                        (vault.vault_balance / vault.target_sum) * 85 + "%",
                    }}
                  ></div>
                </div>
                <p className="target_value">{vault.target_sum} ₴</p>
                <p className="accum_value">
                  Accumulated: {vault.vault_balance} ₴
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {renderModal()}
    </div>
  );
};

export default Piggybank;
