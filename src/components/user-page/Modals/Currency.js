import axios from "axios";
import "../../../styles/user-page/Currency.css";
import { useEffect, useState } from "react";
import Usd from "../../../images/USD.svg";
import Eur from "../../../images/Euro.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

const Currency = function (props) {
  const handleClose = () => {
    props.onClose();
  };

  const id = localStorage.getItem("id");
  const [usdInfo, setUsdInfo] = useState("");
  const [eurInfo, setEurInfo] = useState("");
  const [userCurrency, setUserCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(840);
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [btnClass, setBtnClass] = useState("spacer");

  const updateCurrencyInfo = function () {
    axios
      .get("https://mono-lite-back.azurewebsites.net/currency/info")
      .then((response) => {
        setUsdInfo(response.data[0]);
        setEurInfo(response.data[1]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    updateCurrencyInfo();
  }, []);

  const getUserBalance = function () {
    axios
      .get(`https://mono-lite-back.azurewebsites.net/currency/${id}`)
      .then((response) => setUserCurrency(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserBalance();
  }, []);

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
    setAmount('')
  };

  const buyOrSellCurrency = function () {
    const link =
      selectedOperation === "Buy"
        ? "https://mono-lite-back.azurewebsites.net/currency/buy"
        : "https://mono-lite-back.azurewebsites.net/currency/sell";

    axios
      .post(link, {
        user_id: id,
        amount: +amount,
        currencyCode: selectedCurrency,
      })
      .then((response) => response &&  getUserBalance(),reduceModal() )
      .catch((error) => console.log(error));
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
            {Math.floor(usdInfo.rateBuy * 100) / 100} /{" "}
            {Math.floor(usdInfo.rateSell * 100) / 100}
          </p>
          <div className="vertical-rule"></div>
          <img src={Eur} alt="europe flag" className="eur" />
          <p className="currency-slot">
            {Math.floor(eurInfo.rateBuy * 100) / 100} /{" "}
            {Math.floor(eurInfo.rateSell * 100) / 100}
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
            <p className="currency-balance">{userCurrency.usd_balance} $</p>
          </div>
          <div className="EUR-container">
            <h3 className="title-eur">
              <img src={Eur} alt="eur flag" className="eur" />
              EUR
            </h3>
            <p className="currency-balance">{userCurrency.eur_balance} €</p>
          </div>
        </div>
        {showModal && (
          <div className="currency-operation">
            <h3 className="operation-label" onClick={buyOrSellCurrency}>
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
