import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../UI/Loader/Loader";
import { GoogleLogin } from "@react-oauth/google";
import { googleDecode, signin } from "../../services/auth/index";
import { useForm } from "react-hook-form";
import { rules } from "../../constants/formFieldRules";

const SignIn = function (props) {
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowLoader(true);
    const response = signin(data);
    response && navigate("/account");
  };

  const onSuccess = (response) => {
    const { email, password } = googleDecode(response.credentials);
    setShowLoader(true);
    signin({ email, password });
  };
  const onFailure = () => {
    alert("Problems with google account");
  };

  return (
    <>
      {showLoader && <Loader />}{" "}
      <h2 className="modal_header">
        Welcome back !!! <br /> to continue please{" "}
        <span className="highlight">Log In</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="modal__form">
        <label>Email</label>
        <input type="email" {...register("email", rules.emailRule)} />
        {errors.email && <p className="alert">{errors.email.message}</p>}
        <label>Password</label>
        <input type="password" {...register("password", rules.passwordRule)} />
        {errors.password && <p className="alert">{errors.password.message}</p>}

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
