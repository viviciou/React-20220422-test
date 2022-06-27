import React from "react";

const TabPanel = ({ data, active }) => {
  return (
    <div className="tab-panel">
      {data.map((element, idx) => {
        return (
          <div
            key={idx}
            className={`tab-panel-wrap ${
              active === element.id ? "active" : ""
            }`}
          >
            {element.content}
          </div>
        );
      })}
    </div>
  );
};
TabPanel.defaultProps = {
  data: [],
  active: 0
};
export default TabPanel;
