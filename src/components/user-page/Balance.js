import { useEffect, useState } from 'react';
import '../../styles/user-page/Balance.css'
import axios from "axios";

const Balance = function (props) {
  const [balance, setBalance] = useState(props.cardInfo.card_balance);

  useEffect(() => {
    // Викликаємо логіку оновлення балансу на сервері
    // Приклад з використанням Axios:
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "https://mono-lite-backend.azurewebsites.net/cards",
        ); // Виклик GET-запиту за допомогою Axios
        const data = response.data; // Отримуємо дані з відповіді сервера
        setBalance(data.card_balance); // Оновлюємо стан балансу з отриманими даними
      } catch (error) {
        console.error(error); // Обробка помилок
      }
    };
    fetchBalance();
  }, []); // Порожній масив залежностей, щоб ефект виконався тільки під час монтажу компоненту

  return (
    <div className="balance">
      <div className="self-balance">
        <span className="balance__label">Current balance: </span>
        <span className="balance__value">
          {balance} <span id="currency">₴</span>
        </span>
      </div>
      <div className="loan-balance">
        <span className="loan-balance__label">Loan balance: </span>
        <span className="loan-balance__value">
          0 <span id="currency">₴</span>
        </span>
      </div>
    </div>
  );
};

export default Balance;
