import React, { useState } from "react";
import { tabItemsData } from "../../utils/data";
import TabComponent from "../../components/TabComponent";
import Breadcrumb from "../../components/Breadcrumb";

const TabPage = () => {
  const data = tabItemsData();
  const [active, setActive] = useState(0);
  return (
    <div>
      <Breadcrumb />
      <TabComponent data={data} active={active} setActive={setActive} />
    </div>
  );
};
export default TabPage;
