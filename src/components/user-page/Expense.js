import { faMoneyCheck, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

const Expense = function () {
  const [transactionAmount, setTransactionAmount] = useState("");
  const [message, setMessage] = useState("");
  const handleDeposit = async (event) => {
    event.preventDefault();

    try {
      // Відправляємо POST запит на вказаний сервер з використанням введеної суми
      const response = await axios.post(
        "https://mono-lite-backend.azurewebsites.net/transactions/simulate/withdrawal",
        { transaction_amount: transactionAmount },
      );

      setMessage(response.data.message);
      // Додаткові дії після успішного виконання запиту
    } catch (error) {
      console.log(error.response.response);
      setMessage(error.response.data.message);
    }
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
      <form className="form form--expense" onSubmit={handleDeposit}>
        <label>Amount</label>
        <input type="number" min={0.00} onChange={handleTransactionAmountChange} />
        <button type="submit" className="btn-expense">
          <FontAwesomeIcon icon={faUpload} style={{ color: "lightpink" }} />
        </button>
      </form>
    </div>
  );
};

export default Expense;
