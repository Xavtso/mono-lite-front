import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the required hooks
import Loader from "./Loader";
import {GoogleLogin} from "react-google-login";


const SignIn = function (props) {
  // const clientID = PROCESS.env.clientId;
  const clientID = '76117731491-v6vmn6qs6m1f2ahl4elukmcuhkoojd1p.apps.googleusercontent.com';
  // console.log(clientId);
  // const storage = localStorage;
  // storage.setItem("test", 123);
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
        console.log(response);
        // Redirect user to another page using navigate
        navigate("/account");
      })
      .catch(function (error) {
        console.log(error);
        setShowLoader(false)
        setMessage(error.response.data.message);
      });
  };

  const onSuccess = (res) => {
    const email = res.profileObj.email;
    const password = res.profileObj.googleId;
    setShowLoader(true);

    axios
      .post(`https://mono-lite-backend.azurewebsites.net/auth/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setShowLoader(false);
        console.log(response);
        // Redirect user to another page using navigate
        navigate("/account");
      })
      .catch(function (error) {
        console.log(error);
        setShowLoader(false);
        setMessage(error.response.data.message);
      });
  }
  const onFailure = (res) => {
    console.log(res);
    setMessage('Problems with google account');
  }

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
          <GoogleLogin
            className="btn"
            clientId={clientID}
            buttonText="SignIn by Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            // isSignedIn = {true}
          ></GoogleLogin>
        </div>
      </form>
      <p className="switchLink">
        Don't have an account ?<span onClick={props.switchForm}>Sign Up</span>
      </p>
    </>
  );
};

export default SignIn;
