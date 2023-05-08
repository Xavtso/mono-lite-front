import {
    faComment,
  faCreditCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TransactionInterface = function (props) {
  const handleClose = function () {
    props.onClose();
  };

  const id = localStorage.getItem("id");

  const formatCardNumber = (number) => {
    if (number) {
      const cleanedNumber = number.replace(/\D/g, "");
      const formattedNumber = cleanedNumber.match(/.{1,4}/g).join(" ");
      return formattedNumber;
    }
    return "";
  };

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
            {props.transaction.transaction_type === "TRANSFER" &&
            props.transaction.receiver_card_id === +id
              ? props.transaction.sender_full_name
              : props.transaction.receiver_full_name}
          </h4>
        </div>
        <div className="receiver-card">
          <FontAwesomeIcon
            icon={faCreditCard}
            style={{ color: "#00d9f5", marginRight: "1rem" }}
          />{" "}
          {props.transaction.transaction_type === "TRANSFER" &&
          props.transaction.receiver_card_id === +id
            ? props.transaction.sender_full_name
            : formatCardNumber(props.transaction.receiver_card_number)}
              </div>
          </div>
          <h4 className="description-label"><FontAwesomeIcon icon={faComment}/> Description</h4>
              <div className="description">{props.transaction.transaction_description}</div>
    </div>
  );
};

export default TransactionInterface;
