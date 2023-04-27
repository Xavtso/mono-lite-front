import axios from "axios";
import { UkraineLatinTranslit } from "ukraine-latin";
import { GoogleLogin } from "@react-oauth/google";
import "../styles/AuthForm.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom"; // Import the required hooks
import Loader from "./Loader";
import jwtDecode from "jwt-decode";


const SignUp = function (props) {
  const translit = new UkraineLatinTranslit();

  const [message, setMessage] = useState("");
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
        first_name: translit.toLatin(firstName),
        second_name: translit.toLatin(secondName),
        email: email,
        password: password,
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

  /*aud
: 
"76117731491-v6vmn6qs6m1f2ahl4elukmcuhkoojd1p.apps.googleusercontent.com"
azp
: 
"76117731491-v6vmn6qs6m1f2ahl4elukmcuhkoojd1p.apps.googleusercontent.com"
email
: 
"vitaliyhavrona@gmail.com"
email_verified
: 
true
exp
: 
1682560315
family_name
: 
"Хаврона"
given_name
: 
"Віталій"
iat
: 
1682556715
iss
: 
"https://accounts.google.com"
jti
: 
"81efa5f320bc26f2df60eb0a9584c04e3b1600dd"
name
: 
"Віталій Хаврона"
nbf
: 
1682556415
picture
: 
"https://lh3.googleusercontent.com/a/AGNmyxan92ak8DOQMLePm_p8tBwZWHOugvNHnFgv8Yi3Bg=s96-c"
sub
: 
"10742215234287296 */

   const onSuccess = (response) => {
  const user = jwtDecode(response.credential);
     const firstName = user.givenName
     const secondName = user.familyName;
     const email = user.email;
     const password = user.sub;
     const imageUrl = user.picture;

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
   const onFailure = () => {
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
        Already Have an account?
        <span onClick={props.switchForm}>Sign In</span>
      </p>
    </>
  );
};

export default SignUp;
