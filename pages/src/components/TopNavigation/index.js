import React from "react";
import "./T-navigation.scss";
import Menu from "./Menu";
import { menuList } from "../../utils/menuList";

const TopNavigation = () => {
  const list = menuList();

  return (
    <nav className="T-navigation">
      <ul className="T-navigation-wrap">
        {list.map((item, idx) => {
          const subList = list.filter(
            (filter) => filter.ParentId === item.Id && filter.ParentId !== ""
          );
          return <Menu key={idx} item={item} list={subList} />;
        })}
      </ul>
    </nav>
  );
};
export default TopNavigation;
