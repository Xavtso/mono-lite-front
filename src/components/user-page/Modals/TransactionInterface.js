import {
  faComment,
  faCreditCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const TransactionInterface = function (props) {
  const handleClose = function () {
    props.onClose();
  };

  const [transaction, setTansaction] = useState([]);

  const id = localStorage.getItem("id");

  useEffect(() => {
    setTansaction(props.transaction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="interface">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="person">
        <div className="receiver">
          <div className="user-background">
            <FontAwesomeIcon icon={faUser} className="users__icon" />
          </div>
          <h4>
            {transaction.transaction_type === "TRANSFER" &&
            transaction.receiver_card_id === +id
              ? transaction.sender_full_name
              : transaction.receiver_full_name}
          </h4>
        </div>
        <div className="receiver-card">
          <FontAwesomeIcon
            icon={faCreditCard}
            style={{ color: "#00d9f5", marginRight: "1rem" }}
          />{" "}
          {transaction.transaction_type === "TRANSFER" &&
          transaction.receiver_card_id === +id
            ? transaction.sender_full_name
            : transaction.receiver_card_number}
        </div>
      </div>
      <h4 className="description-label">
        <FontAwesomeIcon icon={faComment} /> Description
      </h4>
      <div className="description">{transaction.transaction_description}</div>
    </div>
  );
};

export default TransactionInterface;
