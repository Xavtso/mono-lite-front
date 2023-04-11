import { faMoneyCheck, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

const Expense = function () {
    const [transactionAmount, setTransactionAmount] = useState('');

    const handleDeposit = async (event) => {
      event.preventDefault();

      try {
        // Відправляємо POST запит на вказаний сервер з використанням введеної суми
        const response = await axios.post(
          "https://mono-lite-backend.azurewebsites.net/transactions/simulate/withdrawal",
          { transaction_amount: transactionAmount },
        );

        console.log(response.data);
        // Додаткові дії після успішного виконання запиту
      } catch (error) {
        console.error(error);
      }
    };

    const handleTransactionAmountChange = (event) => {
      setTransactionAmount(event.target.value);
    };
    return (
      <div class="operation operation--expense">
            <span className="title"> <FontAwesomeIcon icon={faMoneyCheck} style={{ color: "lightpink" }} />{ " "}Expense</span>
        <form className="form form--expense" onSubmit={handleDeposit}>
          <label>Amount</label>
          <input type="number" min={0} onChange={handleTransactionAmountChange}/>
          <button type="submit" className="btn-expense"><FontAwesomeIcon icon={faUpload} style={{color:"lightpink"}}/></button>
        </form>
      </div>
    );
}

export default Expense;