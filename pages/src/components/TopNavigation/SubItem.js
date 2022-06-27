import React from "react";
import { Link } from "react-router-dom";

const SubItem = ({ item }) => {
  return (
    <Link to={item.Url}>
      <li className="T-navigation-subItem">{item.Name}</li>
    </Link>
  );
};
SubItem.defaultProps = {
  item: {}
};
export default SubItem;
