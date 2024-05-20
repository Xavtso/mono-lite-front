import "./CloseAccount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteAgreeModal from "./DeleteAgreeModal";
import { GoogleLogin } from "@react-oauth/google";
import { googleDecode } from "../../services/auth";
import { deleteUser } from "../../services/user";
import { useForm } from "react-hook-form";
import { rules } from "../../constants/formFieldRules";

const CloseAccount = function (props) {
  const [showModal, setShowModal] = useState(false);
  const navigateTo = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleClose = function () {
    props.onClose();
  };

  const onSubmit = (data) => {
    deleteUser(data);
  };

  const onSuccess = (response) => {
    const userData = googleDecode(response.credential);
    try {
      deleteUser(userData);
      navigateTo("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onFailure = () => {
    alert("Unexpected error");
  };

  return (
    <div className="op-modal modal-closeaccount">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount close-title">Are You Sure?</div>
      <div className="screen screen-closeaccount">
        {showModal ? (
          <DeleteAgreeModal closeModal={handleModal} handleForm={deleteUser} />
        ) : (
          <>
            {" "}
            <div className="modal-name">Close Account</div>
            <form
              className="modal__close-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label>Email:</label>
              <input type="email" {...register("email", rules.emailRule)} />
              {errors.email && <p className="span-alert">{errors.message}</p>}
              <label>Password:</label>
              <input
                type="password"
                {...register("password", rules.passwordRule)}
              />
              {errors.password && (
                <p className="span-alert">{errors.message}</p>
              )}
            </form>
            <div className="close-controls">
              <div className="google-btn">
                <GoogleLogin
                  theme="filled_black"
                  size="medium"
                  shape="pill"
                  text="Delete By "
                  onSuccess={onSuccess}
                  onError={onFailure}
                />
              </div>
              <button onClick={handleModal} className="btn control-delete">
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CloseAccount;
