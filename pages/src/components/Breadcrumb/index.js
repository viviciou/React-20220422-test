import React from "react";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import { menuList } from "../../utils/menuList";
import "./breadcrumb.scss";

const Breadcrumb = () => {
  const data = menuList();
  let currentHash = window.location.pathname;
  // 取得目前hash相關內容
  const item = data.filter((fitler) => fitler.Url === currentHash);
  // 取得目前hash父子層相關內容
  const getParent = data.filter((filter) => filter.Id === item[0].ParentId);

  return (
    <nav className="breadcrumb">
      <Link to="/">
        <i className="fas fa-home" />
      </Link>
      /{!isEmpty(getParent) && <label>{getParent[0].Name} /</label>}
      {<Link to={currentHash}>{item[0].Name}</Link>}
    </nav>
  );
};
export default Breadcrumb;
