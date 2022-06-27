import React, { useState } from "react";
import HamburgerBtn from "./HamburgerBtn";
import HamburgerMenu from "./HamburgerMenu";
import "./mobileNavigationMenu.scss";

const MobileNavigationMenu = ({ token, username }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="mobileNavigationMenu">
      <HamburgerBtn
        status={active}
        handleStatus={() => {
          setActive(!active);
        }}
      />
      <HamburgerMenu
        status={active}
        token={token}
        username={username}
        handleStatus={() => {
          setActive(!active);
        }}
      />
    </div>
  );
};
MobileNavigationMenu.defaultProps = {
  handleLogout: () => {}
};
export default MobileNavigationMenu;
