import React, { memo } from "react";
import { Link } from "react-router-dom";

const SubItem = ({ item, handleStatus }) => {
  return (
    <Link to={item.Url} onClick={handleStatus}>
      <li className="hamburgerMenu-subItem">{item.Name}</li>
    </Link>
  );
};
SubItem.defaultProps = {
  item: {},
  handleStatus: () => {}
};
export default memo(SubItem);
