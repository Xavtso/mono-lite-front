import "./TransferModal.css";
import { useForm } from "react-hook-form";
import { makeTransaction } from "../../../../services/transactions";
import { rules } from "../../../../constants/formFieldRules";

const TransferModal = function ({ user, modalClose, onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    makeTransaction({
      transaction_amount: data.amount,
      transaction_description: data.description,
      receiver_card_number: user.card_number,
      operation: "transfer",
    });
    modalClose();
  };

  return (
    <div className="screen-transfer-modal">
      <button className="btn--close-modal" onClick={() => onClose()}>
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
          {...register("description")}
          placeholder="You can leave comment here"
        />
        {errors.amount && (
          <p className="transfer-alert">{errors.amount.message}</p>
        )}

        <button className="btn transfer-btn">Send</button>
      </form>
    </div>
  );
};

export default TransferModal;


                                 





