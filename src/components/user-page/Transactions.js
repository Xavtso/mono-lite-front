import axios from 'axios';
import '../../styles/user-page/Transactions.css'
import { useEffect, useState } from 'react';


const Transactions = function () {
  const [transactions, setTransactions] = useState("");
  const uploadTransactions = function () {
    axios
      .get("https://mono-lite-backend.azurewebsites.net/transactions")
      .then((response) => {
        console.log(response.data);
        setTransactions(response.data);
      })
      .catch((error) => console.log(error));

    // transactions.forEach((transaction) => {
    //   <div class="movements__row">
    //     <div class="movements__type movements__type--deposit">
    //       {transaction.transaction_type}
    //     </div>
    //     <div class="movements__date">3 days ago</div>
    //     <div class="movements__value">{transaction.transaction_amount}</div>
    //   </div>;
    // });
  };

  useEffect(() => {
    uploadTransactions(); // Викликати функцію test при вході на сторінку
  }, []); // Пустий масив залежностей, щоб ефект виконався тільки один раз

  return (
    <div class="movements">
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">4 000€</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">
          1 withdrawal
        </div>
        <div class="movements__date">24/01/2037</div>
        <div class="movements__value">-378€</div>
      </div>
    </div>
  );
}

export default Transactions