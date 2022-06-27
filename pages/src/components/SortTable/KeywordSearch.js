import React, { memo, useState } from "react";
import { noop } from "lodash";
import CusInput from "../../components/CusInput";

const KeywordSearch = ({ show, source, handleSearch, handleCheckAll }) => {
  const [value, setValue] = useState("");

  const getNewData = () => {
    let newData = [];
    if (value === "") {
      newData = source;
    } else {
      source.forEach((element) => {
        const matchWord = Object.values(element).indexOf(value);
        if (matchWord >= 0) {
          newData.push({ ...element });
        }
      });
    }
    // 清空全選按鈕
    handleCheckAll(false);
    // 搜尋
    handleSearch(newData);
  };

  if (show) {
    return (
      <div className="keywordSearchBar">
        <div className="wrap">
          <CusInput
            value={value}
            handleChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className="searchBtn" onClick={getNewData}>
            <i className="fas fa-search" />
            search
          </div>
        </div>
      </div>
    );
  } else return "";
};
KeywordSearch.defaultProps = {
  show: false,
  source: [],
  data: [],
  setDefaultTable: noop,
  handleCheckAll: noop,
  handleSearch: noop
};
export default memo(KeywordSearch);
