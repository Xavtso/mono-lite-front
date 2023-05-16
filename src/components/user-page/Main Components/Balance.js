import { useEffect, useState } from "react";
import "../../../styles/user-page/Balance.css";
import axios from "axios";

const Balance = function (props) {
  const [balance, setBalance] = useState(props.cardInfo.card_balance);
  const [currencyUSD, setCurrencyUSD] = useState([]);
  const [currencyEUR, setCurrencyEUR] = useState([]);

  const fetchBalance = async () => {
    const id = localStorage.getItem("id");
    try {
      const response = await axios.get(
        `https://mono-lite-back.azurewebsites.net/cards/${id}`,
      );
      const data = response.data;
      setBalance(data.card_balance.toFixed(2));
    } catch (error) {
      console.error(error); //
    }
  };

  const getCurrencyInfo = function () {
    axios
      .get("https://api.monobank.ua/bank/currency")
      .then((response) => setCurrencyUSD(response.data[0]))
      .catch((error) => console.log(error));
    axios
      .get("https://api.monobank.ua/bank/currency")
      .then((response) => setCurrencyEUR(response.data[1]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    //  testApi();
  }, []);

  const updateCurrenciesInfo = function () {
    // update USD info
    axios
      .post("https://mono-lite-back.azurewebsites.net/currency", {
        currency_id: currencyUSD.currencyCodeA,
        date: currencyUSD.date,
        rateSell: currencyUSD.rateSell,
        rateBuy: currencyUSD.rateBuy,
      })
      .then((response) => response && "")
      .catch((error) => console.log(error));

    // Update Euro info
    axios
      .post("https://mono-lite-back.azurewebsites.net/currency", {
        currency_id: currencyEUR.currencyCodeA,
        date: currencyEUR.date,
        rateSell: currencyEUR.rateSell,
        rateBuy: currencyEUR.rateBuy,
      })
      .then((response) => response && "")
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCurrencyInfo();
      updateCurrenciesInfo();
    }, 300000 * 60); // Виконувати кожні 5 хвилин
    // ...
    return () => {
      clearInterval(intervalId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //КОСТИЛЬ ?
    // Виконання періодичного запиту на сервер кожні 5 секунд
    const intervalId = setInterval(() => {
      fetchBalance();
    }, 2500);

    // Прибирання інтервалу при розмонтажі компоненту
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="balance">
      <div className="self-balance">
        <span className="balance__label">Balance: </span>
        <span className="balance__value">
          {balance} <span id="currency">₴</span>
        </span>
        <button onClick={""}>click</button>
      </div>
    </div>
  );
};

export default Balance;
