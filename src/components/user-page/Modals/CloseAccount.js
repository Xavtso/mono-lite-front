import axios from "axios";
import "../../../styles/user-page/CloseAccount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteAgreeModal from "./DeleteAgreeModal";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

const CloseAccount = function (props) {
  const [showModal, setShowModal] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleClose = function () {
    props.onClose();
    setInputEmail("");
    setInputPassword("");
  };
  const navigateTo = useNavigate();
  // http://localhost:5000
  // https://mono-lite-back.azurewebsites.net
  const deleteUser = function () {
    axios
      .post("https://mono-lite-back.azurewebsites.net/users/delete", {
        email: inputEmail,
        password: inputPassword,
      })
      .then((response) => response && navigateTo("/"))
      .catch((error) => console.log(error));
    console.log("successed");
  };

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const onSuccess = (response) => {
    const user = jwtDecode(response.credential);
    const email = user.email;
    const password = user.sub;

    axios
      .post(`https://mono-lite-back.azurewebsites.net/users/delete`, {
        email: email,
        password: password,
      })
      .then((response) => response && navigateTo("/"))
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };
  const onFailure = () => {
    setMessage("Problems with google account");
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
            <form className="modal__close-form">
              <label>Email:</label>
              <input
                type="email"
                value={inputEmail}
                onChange={handleEmailChange}
              />
              <label>Password:</label>
              <input
                type="password"
                value={inputPassword}
                onChange={handlePasswordChange}
              />

            </form>
              <p className="close-alert">{message}</p>

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
