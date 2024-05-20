import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banka from "../../images/Дуже Мала Банка.png";
import "./Jar.css";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import CreateJar from "./modals/CreateJar";
import Vault from "./modals/Vault";
import History from "./modals/History";
import { useDispatch, useSelector } from "react-redux";
import { getUserJars } from "../../services/jar";
import { jarSliceActions } from "../../store/slices/jar.slice";

const Jar = function (props) {
  const { jars } = useSelector((state) => state.jar);
  const [activeModal, setActiveModal] = useState(null);
  const { accumulated } = useSelector((state) => state.jar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserJars());
  }, [dispatch]);

  const handleClose = function () {
    props.onClose();
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const renderModal = () => {
    switch (activeModal) {
      case "Create":
        return <CreateJar onClose={closeModal} />;
      case "History":
        return <History onClose={closeModal} />;
      case "Jar":
        return <Vault onClose={closeModal} />;
      default:
        return null;
    }
  };

  const chooseJar = (jarId) => {
    openModal("Jar");
    dispatch(jarSliceActions.chooseJar(jarId));
  };

  return (
    <div className="op-modal modal-piggybank">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount piggybank-amount">
        <span className="pig-title">Accumulated</span>
        {/* <br /> */}
        <p className="accum_all">{accumulated} ₴</p>
      </div>
      <div className="screen screen-piggybank">
        <div className="pig-controls">
          <button onClick={() => openModal("Create")} className="btn pig-btn">
            <p className="btn-icon">+</p> Create
          </button>
          <button className="btn pig-btn" onClick={() => openModal("History")}>
            <p className="btn-icon">
              <FontAwesomeIcon icon={faChartSimple} />
            </p>{" "}
            History
          </button>
        </div>
        <h2 className="banka-title">Vaults</h2>
        {/* <div className={loader}></div> */}
        <div className="vaults">
          {jars.map((jar) => (
            <div
              key={jar.vault_id}
              className="vault__row"
              onClick={() => chooseJar(jar.vault_id)}
            >
              <div>
                <div className="banka-icon">
                  <img src={banka} alt="banka" className="img-small-banka" />
                </div>
              </div>
              <div className="banka-info">
                <p className="banka-name">{jar.vault_title}</p>
                <div className="banka-input">
                  <input type="range" className="banka-range" />
                  <div
                    className="progress"
                    style={{
                      width: (jar.vault_balance / jar.target_sum) * 85 + "%",
                    }}
                  ></div>
                </div>
                <p className="target_value">{jar.target_sum} ₴</p>
                <p className="accum_value">
                  Accumulated: {jar.vault_balance} ₴
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

export default Jar;
