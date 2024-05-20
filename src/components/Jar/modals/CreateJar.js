import { useState } from "react";
import banka from "../../../images/Дизайн без назви (10).png";
import { useForm } from "react-hook-form";
import { rules } from "../../../constants/formFieldRules";
import { createJar } from "../../../services/jar";

const CreateJar = function (props) {
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("For");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAmount = function (e) {
    setAmount(e.target.value);
  };
  const handleTitle = function (e) {
    setTitle(e.target.value);
  };

  const handleClose = () => {
    props.onClose();
  };

  const onSubmit = (data) => {
    console.log(data);
    createJar(data);
    handleClose();
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
      <form className="windows-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="window enterAmount">
          <p className="window-title">Target Amount</p>
          <p className="entered">{amount} ₴</p>
          <input
            type="number"
            {...register("amount", { ...rules.simFieldRules })}
            value={amount}
            className="option-input"
            onChange={handleAmount}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <div className="window enterTitle">
          <p className="window-title">Title</p>
          <p className="entered">{title} </p>
          <input
            type="text"
            placeholder="For"
            {...register("title", { ...rules.titleFieldRules })}
            value={title}
            onChange={handleTitle}
            className="option-input entered-title"
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
      </form>
      <button className="btn btn-create" onClick={handleSubmit(onSubmit)}>
        Create
      </button>
    </div>
  );
};
export default CreateJar;
