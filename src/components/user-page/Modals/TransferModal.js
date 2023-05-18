import { useState } from "react";
import "../../../styles/user-page/TransferModal.css";
import axios from "axios";

const TransferModal = function (props) {
  const [inputAmountValue, setInputAmountValue] = useState("");
  const [inputDescriptionValue, setInputDescriptionValue] = useState("");
  const [message, setMessage] = useState("");
  
  const closeModal = function () {
    props.onClose();
  };
  const user = props.user;
  const handleDescription = function (e) {
    setInputDescriptionValue(e.target.value);
  };
  const handleAmount = function (e) {
    setInputAmountValue(e.target.value);
  };

  const closeModals = function () {
    props.modalClose();
  }

  const makeTransaction = function (e) {
    e.preventDefault();
    const id = localStorage.getItem("id");
    
    axios
      .post("https://mono-lite-back.azurewebsites.net/transactions/new", {
        user_id:id,
        transaction_amount: inputAmountValue,
        transaction_description: inputDescriptionValue,
        receiver_card_number: user.card_number,
      })
      .then((response) => response && closeModals())
      .catch((error) => setMessage(error.response.data.message));
  }

  return (
    <div className="screen-transfer-modal">
      <button className="btn--close-modal" onClick={closeModal}>
        &times;
      </button>
      <div className="target-user">
        <p className="receiver-t-label">Receiver</p>
        <img src={user.imageURL} className="user-image transfer-image" alt="avatar"/><br/>
        {user.first_name + ' ' +  user.second_name}
      </div>

      <form className="transfer-modal-form">
        <label className="transfer-label">Amount</label>
        <input
          className="transfer-input"
          type="number"
          min={0.0}
          placeholder="0"
          value={inputAmountValue}
          onChange={handleAmount}
        />
        <input
          className="transfer-input-description"
          type="text"
          maxLength={64}
          value={inputDescriptionValue}
          onChange={handleDescription}
          placeholder="You can leave comment here"
        />
        {message && <p className="transfer-alert">{message}</p>}
        <button className="btn transfer-btn" onClick={makeTransaction}>Send</button>
      </form>
    </div>
  );
};

export default TransferModal;
