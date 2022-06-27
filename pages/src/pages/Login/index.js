import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, } from "react-router-dom";
import { getUserLoading } from "../../actions/UserAction";
import { Link } from "react-router-dom";
// other Login page function
// https://jasonwatmore.com/post/2020/04/22/react-email-sign-up-with-verification-authentication-forgot-password#account-register-jsx
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

// recaptcha
// https://www.letswrite.tw/recaptcha-v2/

const Login = () => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const redirectToReferrer = useSelector(
    (state) => state.UserReducer.redirectToReferrer
  );
  const status = useSelector((state) => state.UserReducer.status) || "";

  useEffect(() => {
    // componentDidMount
    return () => {
      // componentWillUnmount
    };
  }, []);

  if (redirectToReferrer) {
    // 登入成功時
    // return <Redirect to="/" />;
    return <Routes><Route path="/" element={<Navigate to="/" />} /></Routes>
  } else {
    // 未登入時
    return (
      <div className="login">
        <div className="login-wrap">
          <label>Account</label>
          <input
            type="text"
            value={account}
            onChange={(event) => {
              setAccount(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          {status === "pending" ? (
            <button>Loading</button>
          ) : (
            <button
              onClick={() => {
                dispatch(
                  getUserLoading({ account, password, status: "pending" })
                );
              }}
            >
              submit
            </button>
          )}
        </div>

        {/* 註冊 */}
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    );
  }
};

export default Login;
