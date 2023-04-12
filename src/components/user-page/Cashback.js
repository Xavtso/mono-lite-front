import axios from "axios";
import { useEffect, useState } from "react";

const CashBack = function () {
  const [balance, setBalance] = useState("");

  const getBalance = function () {
    // Відправляємо POST запит на вказаний сервер з використанням введеної суми
    axios
      .get("https://mono-lite-backend.azurewebsites.net/cashback/balance")
      .then((response) => {
        console.log(response.data);
        setBalance(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className="op-modal modal-cashback">
      <div className="amount amount-cashback">{balance}</div>
      <div className="screen screen-cashback"></div>
    </div>
  );
};

export default CashBack;
