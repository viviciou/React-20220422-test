import React from "react";
import TopNavigation from "../TopNavigation";
import MobileNavigationMenu from "../MobileNavigationMenu";
import UserAccountControl from "../UserAccountControl";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="item">
        <div className="logo" />
      </div>
      <div className="item flex-1">
        <TopNavigation />
      </div>
      <div className="item header-rightSide">
        <div className="user-set-up">
          <UserAccountControl />
        </div>
        <MobileNavigationMenu />
      </div>
    </header>
  );
};
export default Header;
