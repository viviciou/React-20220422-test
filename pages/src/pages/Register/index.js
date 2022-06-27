import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInputValidate from "../../utils/useInputValidate";
import CusInput from "../../components/CusInput";
import "./register.scss";
// https://jasonwatmore.com/post/2020/04/22/react-email-sign-up-with-verification-authentication-forgot-password#account-register-jsx

// Validdate Rule
const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmailFormat = (value) => emailRule.test(value);

const Register = () => {
  // 帳號
  const {
    vaelu: name,
    isValid: nameIsValid,
    isError: nameError,
    handleChangeValue: handleChangeValue,
    handleBlurValue: handleBlurValue,
    reset: resetName
  } = useInputValidate(isNotEmpty);
  // Email
  const {
    vaelu: email,
    isValid: emailIsValid,
    isError: emailError,
    handleChangeValue: handleChangeEmail,
    handleBlurValue: handleBlurEmail,
    reset: resetEmail
  } = useInputValidate(isEmailFormat);

  const [registerList, setRegisterList] = useState({
    account: "", // name: "", email: "",
    password: "",
    confirmPw: ""
  });

  // 送出驗證
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log("Submit success!!");
    console.log(name, email);

    // reset
    resetName();
    resetEmail();
  };

  // 驗證欄位
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setRegisterList({ ...registerList, [name]: value });
  };

  // name, email,
  const { account, password, confirmPw } = registerList;
  return (
    <div className="register">
      <h1>Register</h1>
      <h3>Reactjs - Form input validation</h3>

      <form className="register-wrap" onSumbit={handleFormSubmit}>
        <div className="register-fieldText">
          <label>Account</label>
          <CusInput
            name="account"
            value={account}
            handleChange={(e) => {
              handleValidation(e);
            }}
          />
        </div>
        <div className="register-fieldText">
          <label>Name</label>
          <CusInput
            name="name"
            value={name}
            handleChange={handleChangeValue}
            handleBlur={handleBlurValue}
          />
          {nameError && <p style={{ color: "red" }}>Name must not be empty.</p>}
        </div>
        <div className="register-fieldText">
          <label>Email</label>
          <CusInput
            name="email"
            value={email}
            handleChange={(e) => {
              handleChangeEmail(e);
            }}
            handleBlur={handleBlurEmail}
          />
          {emailError && (
            <p style={{ color: "red" }}>Please enter a valid email.</p>
          )}
        </div>
        <div className="register-fieldText">
          <label>Password</label>
          <CusInput
            type="password"
            name="password"
            value={password}
            handleChange={(e) => {
              handleValidation(e);
            }}
          />
        </div>
        <div className="register-fieldText">
          <label>Confirm Password</label>
          <CusInput
            type="password"
            name="confirmPw"
            value={confirmPw}
            handleChange={(e) => {
              handleValidation(e);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
export default Register;
