import React from "react";
import { noop } from "lodash";
import "./tabComponent.scss";
import TabNav from "./TabNav";
import TabPanel from "./TabPanel";

const TabComponent = ({ data, active, setActive }) => {
  return (
    <div className="tabComponent">
      <TabNav data={data} active={active} setActive={setActive} />

      <TabPanel data={data} active={active} />
    </div>
  );
};
TabComponent.defaultProps = {
  data: [],
  active: 0,
  setActive: noop
};
export default TabComponent;
