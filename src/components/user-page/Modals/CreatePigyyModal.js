import { useState } from "react";
import banka from "../../../images/Дизайн без назви (10).png";
import axios from "axios";

const CreatePigyyModal = function (props) {
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("For");
  const id = localStorage.getItem("id");

  const handleAmount = function (e) {
    setAmount(e.target.value);
  };
  const handleTitle = function (e) {
    setTitle(e.target.value);
  };

  const handleClose = () => {
    props.onClose();
  };

  const createVault = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/piggybank/new", {
        vault_title: title,
        target_sum: amount,
        user_id: id,
      }).then(response => response && handleClose())
      .catch((error) => console.log(error));
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="banka-container">
        <img src={banka} alt="banka" className="big-banka" />
      </div>
      <h2 className="create-title">Options</h2>
      <div className="windows-container">
        <div className="window enterAmount">
          <p className="window-title">Target Amount</p>
          <p className="entered">{amount} ₴</p>
          <input
            type="number"
            min={50}
            max={1000000}
            value={amount}
            placeholder="0"
            className="option-input"
            onChange={handleAmount}
          />
        </div>
        <div className="window enterTitle">
          <p className="window-title">Title</p>
          <p className="entered">{title} </p>
          <input
            type="text"
            placeholder="For"
            value={title}
            onChange={handleTitle}
            className="option-input entered-title"
          />
        </div>
      </div>
      <button className="btn btn-create" onClick={createVault}>Create</button>
    </div>
  );
};
export default CreatePigyyModal;
