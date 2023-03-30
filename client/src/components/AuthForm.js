import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import '../styles/AuthForm.css'

const AuthForm = function (props) {
  const [signForm, setSignForm] = useState("signup");

  const toggleForm = () => {
    setSignForm(signForm === "signup" ? "signin" : "signup");
  };

  const handleClose = () => {
    console.log(props.onHide);
    props.onHide();
  }

  return (
    <div className="modal">
      <button className="btn--close-modal" onClick={handleClose}>&times;</button>
      {signForm === "signup" ? <SignUp switchForm = {toggleForm} /> : <SignIn switchForm = {toggleForm} />}
    </div>
  );
};

export default AuthForm;
