import "./TransferModal.css";
import { useForm } from "react-hook-form";
import { makeTransaction } from "../../../../services/transactions";
import { rules } from "../../../../constants/formFieldRules";

const TransferModal = function ({ props }) {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const closeModal = function () {
    props.onClose();
  };
  const user = props.user;

  const closeModals = function () {
    props.modalClose();
  };

  const onSubmit = (data) => {
    makeTransaction({
      transaction_amount: data.amount,
      transaction_description: data.description,
      receiver_card_number: user.card_number,
      operation: "transfer",
    });
    closeModals();
  };

  return (
    <div className="screen-transfer-modal">
      <button className="btn--close-modal" onClick={closeModal}>
        &times;
      </button>
      <div className="target-user">
        <p className="receiver-t-label">Receiver</p>
        <img
          src={user.imageURL}
          className="user-image transfer-image"
          alt="avatar"
        />
        <br />
        {user.first_name + " " + user.second_name}
      </div>

      <form className="transfer-modal-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="transfer-label">Amount</label>
        <input
          className="transfer-input"
          type="number"
          required
          {...register("amount", rules.simFieldRules)}
          placeholder="0"
        />
        <input
          className="transfer-input-description"
          type="text"
          maxLength={64}
          {...register("amount")}
          placeholder="You can leave comment here"
        />
        {errors && <p className="transfer-alert">{errors.root.message}</p>}
        {/* {message && <p className="transfer-alert">{message}</p>} */}
        <button className="btn transfer-btn">Send</button>
      </form>
    </div>
  );
};

export default TransferModal;
