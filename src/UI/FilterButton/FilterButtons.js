import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { transactionsSliceActions } from "../../store/slices/transactions.slice";
export default function FilterButtons() {
  const dispatch = useDispatch();

  function handleFilter(e) {
    dispatch(transactionsSliceActions.setFilterValue(e.target.id));
  }

  const data = [
    {
      id: "TRANSFER",
      color: "#ffb003",
      title: "Transfers",
    },
    {
      id: "DEPOSIT",
      color: "lightgreen",
      title: "Deposits",
    },
    {
      id: "EXPENSE",
      color: "#e52a5a",
      title: "Expenses",
    },
    {
      id: "CASH-BACK",
      color: "#0077cc",
      title: "Cashback",
    },
  ];

  return (
    <div className="movements__head">
      <b>Filter by :</b>
      {data.map((item, index) => (
        <span
          key={index}
          id={item.id}
          style={{ color: item.color }}
          onClick={handleFilter}
        >
          {item.title}
        </span>
      ))}
      <span id="Reset" style={{ color: "#eee" }} onClick={handleFilter}>
        <FontAwesomeIcon icon={faRotate} size="lg" />
      </span>
    </div>
  );
}
