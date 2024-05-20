import { faMoneyCheck, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeTransaction } from "../../services/transactions";
import { useForm } from "react-hook-form";
import { rules } from "../../constants/formFieldRules";

const Expense = function () {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    makeTransaction({ transaction_amount: +data.amount, operation: "expense" });
  };

  return (
    <div className="operation operation--expense">
      <span className="title">
        {" "}
        <FontAwesomeIcon
          icon={faMoneyCheck}
          style={{ color: "lightpink" }}
        />{" "}
        Expense
        {errors.amount && (
          <span className="exp-alert">{errors.amount.message}</span>
        )}
      </span>
      <form className="form form--expense" onSubmit={handleSubmit(onSubmit)}>
        <label>Amount</label>
        <input type="number" {...register("amount", rules.simFieldRules)} />
        <button type="submit" className="btn-expense">
          <FontAwesomeIcon icon={faUpload} style={{ color: "lightpink" }} />
        </button>
      </form>
    </div>
  );
};

export default Expense;
