import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signin } from "../../../store/actions/actionCreators/signInAction";

const VerifyPhone = ({ nextStep, prevStep, handleChange, value, userSignIn }) => {
  axios.defaults.withCredentials = true;

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const verifyPhone = (e) => {
    e.preventDefault();

    // Begin the sign-in process with just the phone number
    setIsLoading(true);
    dispatch(signin(value.phone)) // Directly pass the phone number for login
      .finally(() => setIsLoading(false)); // Stop loading after the request completes
  };

  useEffect(() => {
    if (userSignIn.userInfo) {
      nextStep();
    }
  }, [userSignIn, nextStep]);

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="sendotp">
      <button onClick={back} className="back-button">
        Back
      </button>
      <h2 className="heading__signin">Phone Number Verification</h2>
      <div className="login__user">
        <h3>
          Please enter your phone number
          <br /> {value?.phone ? `+91${value.phone}` : null}
        </h3>
        <form>
          <div className="phone-input">
            <input
              type="tel"
              name="phone"
              maxLength="10"
              pattern="[0-9]*"
              className="phone-input__input"
              value={value.phone}
              onChange={handleChange("phone")}
            />
          </div>
          <button
            className="verify-button"
            onClick={verifyPhone}
            disabled={isLoading || value.phone.length !== 10}
          >
            {isLoading ? "Verifying..." : "Verify Phone"}
          </button>

          {userSignIn.error && (
            <p className="alert-error alert__text--center">
              {userSignIn.error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyPhone;
