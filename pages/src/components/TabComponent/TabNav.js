import React from "react";
import { noop } from "lodash";

const TabNav = ({ data, active, setActive }) => {
  return (
    <nav className="tab-nav">
      {data.map((element, idx) => {
        return (
          <div
            key={element.id}
            className={`item ${active === element.id ? "active" : ""}`}
            onClick={() => {
              setActive(element.id);
            }}
          >
            {element.title}
          </div>
        );
      })}
    </nav>
  );
};
TabNav.defaultProps = {
  data: [],
  active: 0,
  setActive: noop
};
export default TabNav;
