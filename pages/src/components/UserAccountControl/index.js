import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserIdle } from "../../actions/UserAction";
import { Link } from "react-router-dom";

const UserAccountControl = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.UserReducer.token) || "";
  const username = useSelector((state) => state.UserReducer.username) || "";
  if (token !== "") {
    return (
      <div
        onClick={() => {
          dispatch(getUserIdle());
        }}
      >
        {username},logout
      </div>
    );
  } else {
    return <Link to="/login">Login</Link>;
  }
};
export default UserAccountControl;
