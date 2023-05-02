import { useEffect, useState } from 'react';
import '../../styles/user-page/Balance.css'
import axios from "axios";

const Balance = function (props) {
  const [balance, setBalance] = useState(props.cardInfo.card_balance);
  
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
