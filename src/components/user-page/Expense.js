import { faMoneyCheck, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

const Expense = function () {
  const [transactionAmount, setTransactionAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleExepense = async (event) => {
    event.preventDefault();

    if (+transactionAmount === 0) {
      setMessage("Та нашо тобі той ноль?");
      return;
    }

    console.log(transactionAmount);
    try {
      // Відправляємо POST запит на вказаний сервер з використанням введеної суми
      const response = await axios.post(
        "https://mono-lite-backend.azurewebsites.net/transactions/simulate/withdrawal",
        { transaction_amount: transactionAmount },
      );

      setMessage(response.data.message);
      // Додаткові дії після успішного виконання запиту
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
    }

    setTransactionAmount('');
  };

  const handleTransactionAmountChange = (event) => {
    setTransactionAmount(event.target.value);
  };
  return (
    <div class="operation operation--expense">
      <span className="title">
        {" "}
        <FontAwesomeIcon
          icon={faMoneyCheck}
          style={{ color: "lightpink" }}
        />{" "}
        Expense {message ? <span className="exp-alert">{message}</span> : null}
      </span>
      <form className="form form--expense" onSubmit={handleExepense}>
        <label>Amount</label>
        <input type="number" min={0.00} onChange={handleTransactionAmountChange} value={transactionAmount}/>
        <button type="submit" className="btn-expense">
          <FontAwesomeIcon icon={faUpload} style={{ color: "lightpink" }} />
        </button>
      </form>
    </div>
  );
};

export default Expense;
