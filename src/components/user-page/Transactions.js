import axios from "axios";
import "../../styles/user-page/Transactions.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const Transactions = function () {
  const [transactions, setTransactions] = useState([]);
  const [content, setContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);


  const formatDate = function (date) {
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) {
      // менше 1 хвилини
      return "щойно";
    } else if (diff < 1800000) {
      // менше 30 хвилин
      const minutesAgo = Math.floor(diff / 60000);
      return `${minutesAgo} хв. тому`;
    } else if (diff < 3600000) {
      // менше 1 години
      const minutesAgo = Math.floor(diff / 60000);
      return `${minutesAgo} хв. тому`;
    } else if (now.toDateString() === date.toDateString()) {
      // в той же день
      return "сьогодні";
    } else if (diff < 86400000) {
      // менше 1 доби
      return "учора";
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
    uploadTransactions();
  },[transactions]);

  useEffect(() => {
setContent(
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
  setFilteredContent(content)
},[transactions,content])


const filterContent = function (e) {
  let option = e.target.id;
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
        <span id="CASHBACK" style={{ color: "#0077cc" }}   onClick={filterContent} >Cashbacks</span>
        <span id="Reset" style={{ color: "#eee" }}   onClick={uploadTransactions} ><FontAwesomeIcon icon={faRotate} size="lg"/></span>
      </div>
      {filteredContent}
    </div>
  );
};

export default Transactions;
