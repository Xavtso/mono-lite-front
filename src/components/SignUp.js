import axios from "axios";
import { UkraineLatinTranslit } from "ukraine-latin";

import "../styles/AuthForm.css";



const SignUp = function (props) {
  const translit = new UkraineLatinTranslit();

  

;

  const onSubmitHandler = function (e) {
    e.preventDefault();

    const firstName = e.target.elements[0].value;
    const secondName = e.target.elements[1].value;
    const email = e.target.elements[2].value;
    const password = e.target.elements[3].value;

    axios
      .post(`https://mono-lite-backend.azurewebsites.net/auth/signUp`, {
        first_name:translit.toLatin(firstName),
        second_name: translit.toLatin(secondName),
        email: email,
        password: password,
      })
      .then(function (response) {
        window.location.replace('/account')
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
   <>
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
          autoComplete ='on'
          autoCorrect = 'on'
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
          autoComplete = "on"
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

        <div className="controls">
          <button className="btn" type="submit">
            Sign Up
          </button>
          <button className="btn">
            Sign via 
          </button>
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
