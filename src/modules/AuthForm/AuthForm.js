import { useState } from "react";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import "./AuthForm.css";

const AuthForm = function (props) {
  const [signForm, setSignForm] = useState("signup");

  const toggleForm = () => {
    setSignForm(signForm === "signup" ? "signin" : "signup");
  };

  const handleClose = () => {
    props.onHide();
  };
  const keyHandleClose = function (e) {
    if (e.keyCode === 27) {
      props.onHide();
    }
  };

  return (
    <div className="modal" onKeyDown={keyHandleClose}>
      <button
        className="btn--close-modal"
        onClick={handleClose}
        onKeyDown={keyHandleClose}
      >
        &times;
      </button>
      {signForm === "signup" ? (
        <SignUp switchForm={toggleForm} />
      ) : (
        <SignIn switchForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthForm;
