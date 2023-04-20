import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the required hooks
import Loader from "./Loader";

const SignIn = function (props) {
  const storage = localStorage;
  storage.setItem("test", 123);
  const [message, setMessage] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  // Use useLocation to access the current location object

  const onSubmitHandler = function (e) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    setShowLoader(true);

    axios
      .post(`https://mono-lite-backend.azurewebsites.net/auth/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setShowLoader(false);
        // Redirect user to another page using navigate
        navigate("/account");
      })
      .catch(function (error) {
        console.log(error);
        setShowLoader(false)
        setMessage(error.response.data.message);
      });
  };

  return (
    <>
      {showLoader && <Loader/>}{" "}
      <h2 className="modal_header">
        Welcome back !!! <br /> to continue please{" "}
        <span className="highlight">Log In</span>
      </h2>
      <form onSubmit={onSubmitHandler} className="modal__form">
        <label>Email</label>
        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          autoComplete="on"
          autoCorrect="on"
          title="Please enter a valid email address"
        />
        <label>Password</label>
        <input
          type={"password"}
          name="password"
          minLength={8}
          onKeyDown={(e) => {
            if (e.keyCode === 32) {
              e.preventDefault();
            }
          }}
          required
          title="Please enter your password "
        ></input>
        {message ? <p className="alert">{message}</p> : null}
        <div className="controls">
          <button className="btn" type="submit">
            Sign In
          </button>
          <button className="btn">Sign via</button>
        </div>
      </form>
      <p className="switchLink">
        Don't have an account ?<span onClick={props.switchForm}>Sign Up</span>
      </p>
    </>
  );
};

export default SignIn;
