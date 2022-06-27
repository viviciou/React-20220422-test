import React, { memo } from "react";
import classnames from "classnames";

const HamburgerBtn = ({ status, handleStatus }) => {
  const isActive = classnames({
    active: status === true
  });
  return (
    <div className={`hamburgerBtn ${isActive}`} onClick={handleStatus}>
      <span />
      <span />
      <span />
    </div>
  );
};
HamburgerBtn.defaultProps = {
  status: false,
  handleStatus: () => {}
};
export default memo(HamburgerBtn);
