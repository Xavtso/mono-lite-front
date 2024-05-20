import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Deposit.css";
import { faDownload, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useForm } from "react-hook-form";
import { rules } from "../../constants/formFieldRules";
import { makeTransaction } from "../../services/transactions";
const Deposit = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    makeTransaction({ transaction_amount: +data.amount, operation: "deposit" });
  };

  return (
    <div className="operation operation--deposit">
      <span className="title">
        <FontAwesomeIcon icon={faMoneyBills} style={{ color: "lightgreen" }} />
        {"  "}
        Deposit{" "}
        {errors.amount && (
          <span className="dep-alert">{errors.amount.message}</span>
        )}
      </span>
      <form className="form form--deposit" onSubmit={handleSubmit(onSubmit)}>
        <label>Amount</label>
        <input type="number" {...register("amount", rules.simFieldRules)} />
        <button type="submit" className="btn-deposit">
          <FontAwesomeIcon icon={faDownload} style={{ color: "green" }} />
        </button>
      </form>
    </div>
  );
};

export default Deposit;
