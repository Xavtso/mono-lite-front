import { GoogleLogin } from "@react-oauth/google";
import "../../modules/AuthForm/AuthForm.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../UI/Loader/Loader";
import { googleDecode, signup } from "../../services/auth";
import { useForm } from "react-hook-form";
import { rules } from "../../constants/formFieldRules";

const SignUp = function (props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();
  const onSubmit = (data) => {
    setShowLoader(true);

    const response = signup(data);
    setShowLoader(!showLoader);
    response && navigate("/account");
  };

  const onSuccess = (response) => {
    const userData = googleDecode(response.credential);
    setShowLoader(!showLoader);

    signup(userData);
    navigate("/account");
    setShowLoader(!showLoader);
  };
  const onFailure = () => {
    alert("Problems with google account");
  };

  return (
    <>
      {showLoader && <Loader />}{" "}
      <h2 className="modal_header">
        Open your bank account <br /> in just{" "}
        <span className="highlight">5 minutes</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="modal__form">
        <label>First Name</label>
        <input type="text" {...register("first_name", rules.authNameRule)} />
        {errors.first_name && (
          <p className="alert">{errors.first_name.message}</p>
        )}
        <label>Second Name</label>
        <input type="text" {...register("second_name", rules.authNameRule)} />
        {errors.second_name && (
          <p className="alert">{errors.second_name.message}</p>
        )}
        <label>Email</label>
        <input type="email" {...register("email", rules.emailRule)} />
        {errors.email && <p className="alert">{errors.email.message}</p>}
        <label>Password</label>
        <input type="password" {...register("password", rules.passwordRule)} />
        {errors.password && <p className="alert">{errors.password.message}</p>}

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
