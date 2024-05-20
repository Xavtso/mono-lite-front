import "./Transactions.css";
import { useEffect } from "react";
import { formatDate } from "../../utility";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionsHistory } from "../../services/transactions";
import FilterButtons from "../../UI/FilterButton/FilterButtons";
import { selectFilteredTransactions } from "../../store/selectors/transactions/selectFilteredTransactions";

const Transactions = function () {
  const transactions = useSelector(selectFilteredTransactions);
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsHistory());
  }, [dispatch]);

  return (
    <div className="movements">
      <FilterButtons />
      {transactions?.map((transaction, index) => (
        <div
          key={index}
          className="movements__row"
          // onClick={() => createPortal(<TransactionInterface />,document.body)}
        >
          <div
            className={`movements__type movements__type--${transaction.transaction_type}`}
          >
            {transaction.transaction_type}
          </div>
          <div className="receiver-name">
            {transaction.transaction_type === "TRANSFER" &&
            transaction.receiver_card_id === +id
              ? transaction.sender_full_name
              : transaction.receiver_full_name}
          </div>
          <div className="movements__date">
            {formatDate(new Date(transaction.createdAt))}
          </div>

          <div
            className={`movements__value mov--${transaction.transaction_type}`}
          >
            {transaction.sender_card_id === +id ? "-" : ""}
            {transaction.transaction_amount} ₴
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
