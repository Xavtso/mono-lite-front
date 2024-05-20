import "./Currency.css";
import { useEffect, useState } from "react";
import Usd from "../../images/USD.svg";
import Eur from "../../images/Euro.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  buyCurrency,
  getCurrencyInfo,
  getUserBalance,
} from "../../services/currency";

const Currency = function (props) {
  const handleClose = () => {
    props.onClose();
  };

  const id = localStorage.getItem("id");
  const { usd, eur, userBalance } = useSelector((state) => state.currency);
  const [selectedCurrency, setSelectedCurrency] = useState(840);
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [btnClass, setBtnClass] = useState("spacer");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyInfo());
    dispatch(getUserBalance());
  }, [dispatch]);

  const handleSelectedCurrency = function (e) {
    setSelectedCurrency(e.target.value);
  };

  const expandModal = function (e) {
    setShowModal(true);
    setSelectedOperation(e.target.value);
    setBtnClass("");
  };

  const reduceModal = () => {
    setShowModal(false);
    setBtnClass("spacer");
    setAmount("");
  };

  const handleBuyCurrency = () => {
    const response = buyCurrency({
      user_id: id,
      amount: +amount,
      currencyCode: selectedCurrency,
    });
    response && reduceModal();
  };
  const handleSellCurrency = () => {
    const response = buyCurrency({
      user_id: id,
      amount: +amount,
      currencyCode: selectedCurrency,
    });
    response && reduceModal();
  };

  const handleOperation = () => {
    if (selectedOperation === "Buy") {
      handleBuyCurrency();
    } else {
      handleSellCurrency();
    }
  };

  return (
    <div className="op-modal modal-currency">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <p className="currency-title">Exchange Rate</p>
      <div className="currency-info-container">
        <div className="currency-info">
          <img src={Usd} alt="usa flag" className="usd" />
          <p className="currency-slot">
            {Math.floor(usd.rateBuy * 100) / 100} /{" "}
            {Math.floor(usd.rateSell * 100) / 100}
          </p>
          <div className="vertical-rule"></div>
          <img src={Eur} alt="europe flag" className="eur" />
          <p className="currency-slot">
            {Math.floor(eur.rateBuy * 100) / 100} /{" "}
            {Math.floor(eur.rateSell * 100) / 100}
          </p>
        </div>
      </div>
      <div className="screen screen-currency">
        <h2 className="screen-title">Your Currencies</h2>
        <div className="balance-container">
          <div className="USD-container">
            <h3 className="title-usd">
              <img src={Usd} alt="usa flag" className="usd" />
              USD
            </h3>
            <p className="currency-balance">{userBalance.usd_balance} $</p>
          </div>
          <div className="EUR-container">
            <h3 className="title-eur">
              <img src={Eur} alt="eur flag" className="eur" />
              EUR
            </h3>
            <p className="currency-balance">{userBalance.eur_balance} €</p>
          </div>
        </div>
        {showModal && (
          <div className="currency-operation">
            <h3 className="operation-label" onClick={handleOperation}>
              {selectedOperation}{" "}
            </h3>
            <input
              type="number"
              className="currency-input"
              min={0}
              value={amount}
              placeholder="100 $"
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              className="currency-select"
              onClick={handleSelectedCurrency}
            >
              <option value={840}>USD</option>
              <option value={978}>EUR</option>
            </select>
            <button className="operation-close" onClick={reduceModal}>
              &times;
            </button>
          </div>
        )}

        <div className={`currency-controls ${btnClass}`}>
          <button
            className="btn pig-btn curr-btn"
            value="Buy"
            onClick={expandModal}
          >
            <FontAwesomeIcon icon={faCartPlus} className="cur-icon" /> Buy
          </button>
          <button
            className="btn pig-btn curr-btn"
            value="Sell"
            onClick={expandModal}
          >
            <FontAwesomeIcon icon={faMoneyBill1Wave} className="cur-icon" />{" "}
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};
export default Currency;
