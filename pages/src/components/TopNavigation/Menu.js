import React from "react";
import { Link } from "react-router-dom";
import SubItem from "./SubItem";

const Menu = ({ item, list }) => {
  return (
    <li key={item.Id} className="T-navigation-item">
      {item.ParentId === "" && item.Name !== "Oops" && (
        <Link to={item.Url}>
          <label className="T-navigation-label">{item.Name}</label>
        </Link>
      )}
      {/* 判斷是否為此Id的子選項 */}
      {list === [] ? (
        ""
      ) : (
        <ul className="T-navigation-sub">
          {list.map((element) => {
            return <SubItem key={element.Id} item={element} />;
          })}
        </ul>
      )}
    </li>
  );
};
Menu.defaultProps = {
  item: {},
  list: {}
};
export default Menu;
