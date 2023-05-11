import axios from "axios";
import receipt from "../../../images/receipt.png";
import { useState, useEffect } from "react";

const History = function (props) {
  const [transactions, setTransactions] = useState([]);
  const [content, setContent] = useState([]);

  const handleClose = () => {
    props.onClose();
  };

  const id = localStorage.getItem("id");

  const formatDate = function (date) {
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) {
      // менше 1 хвилини
      return "now";
    } else if (diff < 1800000) {
      // менше 30 хвилин
      const minutesAgo = Math.floor(diff / 60000);
      return `${minutesAgo} m. ago`;
    } else if (diff < 3600000) {
      // менше 1 години
      const minutesAgo = Math.floor(diff / 60000);
      return `${minutesAgo} m. ago`;
    } else if (now.toDateString() === date.toDateString()) {
      // в той же день
      return "today";
    } else if (diff < 86400000) {
      // менше 1 доби
      return "yesterday";
    } else {
      // більше 1 доби
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }
  };

  const uploadTransactions = function () {
    const id = localStorage.getItem("id");
    axios
      .get(`https://mono-lite-back.azurewebsites.net/transactions/${id}`)
      .then((response) => {
        setTransactions(
          response.data
            .filter((mov) => mov.transaction_type === "PIG-BANK")
            .reverse(),
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      uploadTransactions();
    }, 1000);

    // Прибирання інтервалу при розмонтажі компоненту
    return () => {
      clearInterval(intervalId);
    };
  }, [transactions]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContent(
        transactions === [""]
          ? "Here can be your transactions"
          : transactions.map((transaction, index) => (
              <div key={index} className="movements__row pig-row">
                <div className={"movements__type movements__type--PIG-BANK"}>
                  {transaction.transaction_type}
                </div>
                <div className={`receiver-name ${transaction.transaction_description.startsWith('Роз') ? 'breaked' : ''}`}>
                  {transaction.transaction_type === "PIG-BANK" &&
                  transaction.receiver_card_id === +id
                    ? transaction.sender_full_name
                    : transaction.receiver_full_name}
                </div>
                <div className="movements__date">
                  {formatDate(new Date(transaction.createdAt))}
                </div>
                
                <div
                  className={`movements__value mov--${
                    transaction.transaction_description.startsWith("Поп")
                      ? "DEPOSIT"
                      : "EXPENSE"
                  }`}
                >
                  {transaction.transaction_description.startsWith("Поп")
                    ? ""
                    : "-"}
                  {transaction.transaction_amount} ₴
                </div>
              </div>
            )),
      );
    }, 1000);

    // Прибирання інтервалу при розмонтажі компоненту
    return () => {
      clearInterval(intervalId);
    };
  }, [transactions, content, id]);

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="jar_container history">
        <img src={receipt} className="settings-image" alt="settingsJar" />
          </div>
          <h2 className="history-title">History</h2>
      <div className="movements pig-movements">{content}</div>
    </div>
  );
};

export default History;
