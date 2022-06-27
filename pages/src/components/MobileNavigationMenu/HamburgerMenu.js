import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserIdle } from "../../actions/UserAction";
import classnames from "classnames";
import SubItem from "./SubItem";

import { menuList } from "../../utils/menuList";

const HamburgerMenu = ({ status, handleStatus }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.UserReducer.token);
  const username = useSelector((state) => state.UserReducer.username);
  const list = menuList();
  const isActive = classnames({
    active: status === true
  });
  return (
    <ul className={`hamburgerMenu ${isActive}`}>
      {list.map((item) => {
        const subList = list.filter(
          (filterItem) =>
            filterItem.ParentId === item.Id && filterItem.ParentId !== ""
        );
        if (item.ParentId === "" && item.Name !== "Oops") {
          return (
            <li key={item.Id} className="hamburgerMenu-item">
              <Link to={item.Url} onClick={handleStatus}>
                <label className="hamburgerMenu-label">{item.Name}</label>
              </Link>
              {!subList && subList === [] ? (
                ""
              ) : (
                <ul className="hamburgerMenu-sub">
                  {subList.map((item) => {
                    return (
                      <SubItem
                        key={item.Id}
                        item={item}
                        handleStatus={handleStatus}
                      />
                    );
                  })}
                </ul>
              )}
            </li>
          );
        }
        return null;
      })}

      {!token ? (
        <Link to="/login" onClick={handleStatus}>
          <li>Login</li>
        </Link>
      ) : (
        <li
          onClick={() => {
            dispatch(getUserIdle());
          }}
        >
          {username},Logout
        </li>
      )}
    </ul>
  );
};
HamburgerMenu.defaultProps = {
  status: false
};
export default memo(HamburgerMenu);
