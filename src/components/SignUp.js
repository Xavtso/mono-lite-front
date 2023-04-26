import axios from "axios";
import { UkraineLatinTranslit } from "ukraine-latin";
import { GoogleLogin } from "react-google-login";
import "../styles/AuthForm.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom"; // Import the required hooks
import Loader from "./Loader";


const SignUp = function (props) {
  const translit = new UkraineLatinTranslit();
 const clientID =
   "76117731491-v6vmn6qs6m1f2ahl4elukmcuhkoojd1p.apps.googleusercontent.com";
 
  const [message, setMessage] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  
  const navigate = useNavigate();
  const onSubmitHandler = function (e) {
    e.preventDefault();

    const firstName = e.target.elements[0].value;
    const secondName = e.target.elements[1].value;
    const email = e.target.elements[2].value;
    const password = e.target.elements[3].value;

    setShowLoader(true);

    axios
      .post(`https://mono-lite-backend.azurewebsites.net/auth/signUp`, {
        first_name:translit.toLatin(firstName),
        second_name: translit.toLatin(secondName),
        email: email,
        password: password,
      })
      .then(function (response) {
         navigate("/account");
          setShowLoader(false)
          console.log(response);
        })
        .catch(function (error) {
        setShowLoader(false)
        setMessage(error.response.data.message);
      });
  };

 const onSuccess = (res) => {
   const firstName = res.profileObj.givenName
   const secondName = res.profileObj.familyName;
   const email = res.profileObj.email;
   const password = res.profileObj.googleId;
   const imageUrl = res.profileObj.imageUrl;

   setShowLoader(true);

   axios
     .post(`https://mono-lite-backend.azurewebsites.net/auth/signUp`, {
       first_name: translit.toLatin(firstName),
       second_name: translit.toLatin(secondName),
       email: email,
       password: password,
       imageUrl: imageUrl
     })
     .then(function (response) {
       navigate("/account");
       setShowLoader(false);
       console.log(response);
     })
     .catch(function (error) {
       setShowLoader(false);
       setMessage(error.response.data.message);
     });
 };
 const onFailure = (res) => {
   console.log(res);
   setMessage("Problems with google account");
 };


  return (
    <>
      {showLoader && <Loader />}{" "}
      <h2 className="modal_header">
        Open your bank account <br /> in just{" "}
        <span className="highlight">5 minutes</span>
      </h2>
      <form onSubmit={onSubmitHandler} className="modal__form">
        <label>Name</label>
        <input
          type={"text"}
          pattern="^[A-Za-zА-Яа-яЄєІіЇїҐґ'\s]*$"
          minLength={2}
          maxLength={24}
          required
          autoComplete="on"
          autoCorrect="on"
          autoFocus
          title="Plese enter your Name"
        ></input>
        <label>Surname</label>
        <input
          type={"text"}
          name="surname"
          pattern="^[A-Za-zА-Яа-яЄєІіЇїҐґ'\s]*$"
          minLength={2}
          maxLength={24}
          required
          title="Plese enter your Surname"
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          autoComplete="on"
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
            Sign Up
          </button>
          <GoogleLogin
            className="btn"
            clientId={clientID}
            buttonText="SignUp by Google "
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            // isSignedIn={true}
          ></GoogleLogin>
        </div>
      </form>
      <p className="switchLink">
        Already Have an account?
        <span onClick={props.switchForm}>Sign In</span>
      </p>
    </>
  );
};

export default SignUp;
