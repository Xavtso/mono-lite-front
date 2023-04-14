import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/user-page/Deposit.css";
import { faDownload, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";

const Deposit = function () {
  const [transactionAmount, setTransactionAmount] = useState('');
  const [message,setMessage] = useState('')
  const handleDeposit = async (event) => {
    event.preventDefault();

    try {
      // Відправляємо POST запит на вказаний сервер з використанням введеної суми
      const response = await axios.post(
        "https://mono-lite-backend.azurewebsites.net/transactions/simulate/deposit",
        { transaction_amount: transactionAmount },
      );

      console.log(response.data);
      // Додаткові дії після успішного виконання запиту
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleTransactionAmountChange = (event) => {
    setTransactionAmount(event.target.value);
  };

  return (
    <div class="operation operation--deposit">
      <span className="title">
        <FontAwesomeIcon icon={faMoneyBills} style={{ color: "lightgreen" }} />
        {"  "}
        Deposit {message ? <span className="dep-alert">{message}</span> : null}
      </span>
      <form className="form form--deposit" onSubmit={handleDeposit}>
        <label>Amount</label>
        <input
          type="number"
          min={0}
          value={transactionAmount}
          onChange={handleTransactionAmountChange}
        />
        <button type="submit" className="btn-deposit">
          <FontAwesomeIcon icon={faDownload} style={{ color: "green" }} />
        </button>
      </form>
    </div>
  );
};

export default Deposit;
