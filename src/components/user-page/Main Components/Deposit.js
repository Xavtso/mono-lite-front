import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/user-page/Deposit.css";
import { faDownload, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";

const Deposit = function () {
  const [transactionAmount, setTransactionAmount] = useState('');
  const [message, setMessage] = useState('')
  const handleDeposit = async (event) => {
    event.preventDefault();
  
  const id = localStorage.getItem("id");   
    if (+transactionAmount === 0) {
        setMessage("Та нашо тобі той ноль?");
        return
      }
      try {
        // Відправляємо POST запит на вказаний сервер з використанням введеної суми
         await axios.post(
           "http://localhost:5000/transactions/simulate/deposit",
           {  user_id: id,
             transaction_amount: transactionAmount
           },
         );
          
        } catch (error) {
          setMessage(error.response.data.message);
        }
      
    setTransactionAmount('')
  };

  const handleTransactionAmountChange = (event) => {
    setMessage('')
    const amount = event.target.value
      setTransactionAmount(amount);
  };

  return (
    <div className="operation operation--deposit">
      <span className="title">
        <FontAwesomeIcon icon={faMoneyBills} style={{ color: "lightgreen" }} />
        {"  "}
        Deposit {message ? <span className="dep-alert">{message}</span> : null}
      </span>
      <form className="form form--deposit" onSubmit={handleDeposit}>
        <label>Amount</label>
        <input
          type="number"
          min={0.00}
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
