import "../../styles/user-page/CashBack.css";
import axios from "axios";
import { useEffect, useState } from "react";

const CashBack = function (props) {
  const [balance, setBalance] = useState("");
  const [leftToCollect, setLeftToCollect] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleClose = function () {
    props.onClose();
  };

  const getBalance = function () {
    axios
      .get("https://mono-lite-backend.azurewebsites.net/cashback/balance")
      .then((response) => {
        setBalance(response.data.toFixed(2));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBalance();
  }, []);

  const calcCashbackRemain = function () {
    const calculated = 100 - balance;
    if (calculated < 0) {
      setLeftToCollect("You can withdraw your money");
    } else setLeftToCollect(`Remain to withraw ${calculated}`);
  };

  useEffect(() => {
    calcCashbackRemain();
  });

  const formHandler = function (event) {
    event.preventDefault();
    axios
      .post("https://mono-lite-backend.azurewebsites.net/cashback", {
        amount: +inputValue,
      })
      .then((response) => response ? props.onClose() : '')
      .catch((error) => {
        console.log(error);
      });
  };
  const handleValue = function (e) {
    setInputValue(e.target.value)
  }

  return (
    <div className="op-modal modal-cashback">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount-cashback">
        Accumulated {balance} ₴ <br /> {leftToCollect}
      </div>
      <div className="screen screen-cashback">
        <div className="modal-name">CashBack</div>
        <form onSubmit={formHandler} className="modal__form cashBack--form">
          <label>Amount : </label>
          <input
            type="number"
            min={100.0}
            value={inputValue}
            onChange={handleValue}
          />
          <button
            type="submit"
            className={`btn btn--cashback ${
              balance < 100 ? "btn--disabled" : ""
            }`}
            disabled={balance < 100}
          >
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
};

export default CashBack;
