import axios from "axios";
import "../../styles/user-page/Transactions.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const Transactions = function () {
  const [transactions, setTransactions] = useState([]);
  const [content, setContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState(null);
  const [filter, setFilter] = useState(false);


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
    axios
      .get("https://mono-lite-backend.azurewebsites.net/transactions")
      .then((response) => {
        setTransactions(response.data.reverse());
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
  },[transactions]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log('hi');
      setContent(transactions === '' ? 'Here can be your transactions' :
        transactions.map((transaction, index) => (
    <div key={index} className="movements__row">
      <div
        className={`movements__type movements__type--${transaction.transaction_type}`}
      >
        {transaction.transaction_type}
      </div>
      <div className="receiver-name">{transaction.receiver_full_name}</div>
      <div className="movements__date">
        {formatDate(new Date(transaction.createdAt))}
      </div>
      {/* <div className="movements__description">
              {transaction.transaction_description}
            </div> */}
      <div className={`movements__value mov--${transaction.transaction_type}`}>
        {transaction.transaction_type === "EXPENSE" ? "-" : ""}
        {transaction.transaction_amount} ₴
      </div>
    </div>
)),
);
}, 1000);

// Прибирання інтервалу при розмонтажі компоненту
return () => {
  clearInterval(intervalId);
}
},[transactions,content])


const filterContent = function (e) {
  let option = e.target.id;
  setFilter(true)
  setFilteredContent(
    content.filter(
      (mov) => mov.props.children[0].props.children === `${option}`,
    ),
  );
} 

  return (
    <div className="movements">
      <div className="movements__head">
        <b>Filter by :</b>
        <span id="TRANSFER" style={{ color: "#ffb003" }}   onClick={filterContent} >Transfers</span>
        <span id="DEPOSIT" style={{ color: "lightgreen"}} onClick={filterContent} >Deposits</span>
        <span id="EXPENSE" style={{ color: "#e52a5a" }}   onClick={filterContent} >Expenses</span>
        <span id="CASH-BACK" style={{ color: "#0077cc" }}   onClick={filterContent} >Cashbacks</span>
        <span id="Reset" style={{ color: "#eee" }}   onClick={() => {setFilter(false)}} ><FontAwesomeIcon icon={faRotate} size="lg"/></span>
      </div>
      {filter ? filteredContent : content}
    </div>
  );
};

export default Transactions;
