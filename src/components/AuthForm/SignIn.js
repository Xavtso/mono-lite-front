import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the required hooks
import Loader from "./Loader";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const SignIn = function (props) {
  const storage = localStorage;
  const [message, setMessage] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = function (e) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    setShowLoader(true);

    axios
      .post(`https://mono-lite-back.azurewebsites.net/auth/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setShowLoader(false);
        storage.setItem("token", response.data.token);
        const decoded = jwtDecode(response.data.token);
        storage.setItem("id", decoded.id);
        navigate("/account");
      })
      .catch(function (error) {
        setShowLoader(false);
        setMessage(error.response.data.message);
      });
  };

  // const onSuccess = (res) => { console.log(res)}

  const onSuccess = (response) => {
    const user = jwtDecode(response.credential);
    const email = user.email;
    const password = user.sub;
    setShowLoader(true);

    axios
      .post(`https://mono-lite-back.azurewebsites.net/auth/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setShowLoader(false);
        storage.setItem("token", response.data.token);
        const decoded = jwtDecode(response.data.token);
        storage.setItem("id", decoded.id);
        navigate("/account");
      })
      .catch(function (error) {
        setShowLoader(false);
        setMessage(error.response.data.message);
      });
  };
  const onFailure = () => {
    setMessage("Problems with google account");
  };

  return (
    <>
      {showLoader && <Loader />}{" "}
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
          <div className="google-btn">
            <GoogleLogin
              theme="filled_black"
              size="large"
              shape="pill"
              text="Sign by Google"
              onSuccess={onSuccess}
              onError={onFailure}
            />
          </div>
        </div>
      </form>
      <p className="switchLink">
        Don't have an account ?<span onClick={props.switchForm}>Sign Up</span>
      </p>
    </>
  );
};

export default SignIn;
