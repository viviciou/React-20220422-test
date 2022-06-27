import React, { memo } from "react";
import { noop } from "lodash";

const SelectPerPage = ({ show, selected, setSelected }) => {
  if (show) {
    return (
      <div className="selectPerPage-position">
        每頁顯示
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        筆
      </div>
    );
  }
};
SelectPerPage.defaultProps = {
  show: false,
  selected: "3",
  setSelected: noop
};
export default memo(SelectPerPage);
