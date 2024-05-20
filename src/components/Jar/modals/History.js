import receipt from "../../../images/receipt.png";
import { formatDate } from "../../../utility";
import { useSelector } from "react-redux";
import { selectJarTransactions } from "../../../store/selectors/jar/selectJarTransactions";

const History = function (props) {
  const handleClose = () => {
    props.onClose();
  };
  const id = localStorage.getItem("id");
  const transactions = useSelector(selectJarTransactions);

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="jar_container history">
        <img src={receipt} className="settings-image" alt="settingsJar" />
      </div>
      <h2 className="history-title">History</h2>
      <div className="movements pig-movements">
        {transactions.map((transaction, index) => (
          <div key={index} className="movements__row pig-row">
            <div className={"movements__type movements__type--PIG-BANK"}>
              {transaction.transaction_type}
            </div>
            <div
              className={`receiver-name ${
                transaction.transaction_description.startsWith("Роз")
                  ? "breaked"
                  : ""
              }`}
            >
              {transaction.receiver_card_id === +id
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
              {transaction.transaction_description.startsWith("Поп") ? "" : "-"}
              {transaction.transaction_amount} ₴
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
