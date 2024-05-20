import "./CashBack.css";
import { useEffect } from "react";
import {
  getCashbackBalance,
  withdrawCashback,
} from "../../services/cashback";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { rules } from "../../constants/formFieldRules";

const CashBack = function (props) {
  const { balance, leftToCollect } = useSelector((state) => state.cashback);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = function () {
    props.onClose();
  };

  useEffect(() => {
    dispatch(getCashbackBalance());
  }, [dispatch]);

  const onSubmit = (data) => {
    withdrawCashback(data.amount);
  };

  return (
    <div className="op-modal modal-cashback">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount-cashback">
        Accumulated {balance} ₴ <br /> {leftToCollect}
      </div>
      <div className="screen screen-cashback">
        <div className="modal-name">CashBack</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal__form cashBack--form"
        >
          <label>Amount : </label>
          <input
            type="number"
            {...register("amount", {
              ...rules.cashBack,
              max: { value: balance, message: "Та в тебе стільки нема!!" },
            })}
          />
          {errors.amount && <p className="alert">{errors.amount.message}</p>}
          <button
            type="submit"
            className={`btn btn--cashback ${errors.amount && "btn--disabled"}`}
            disabled={errors.amount}
          >
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
};

export default CashBack;
