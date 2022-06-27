import React, { useState, useMemo, memo } from "react";
import { isEmpty, noop } from "lodash";
import { setAllCheckData, setCheckData } from "./utils";
import FieldShowBar from "./FieldShowBar";
import SelectPerPage from "./SelectPerPage";
import KeywordSearch from "./KeywordSearch";
import Pagination from "../Pagination";
import "./sortTable.scss";

const SortTable = ({
  isFieldShowBar,
  isChangePerPage,
  isCheckbox,
  isKeywordSearch,
  perPage,
  referenceData,
  data,
  tHeader,
  currentPage,
  setCurrentPage,
  setPerPage,
  setfieldShow,
  setCheck,
  setSearchData
}) => {
  const [sortConfig, setSortConfig] = useState({
    // 排序
    key: null
  });
  // 排序
  const sortedTableItems = useMemo(() => {
    let sortedItems = [];
    if (isEmpty(data)) {
      return (sortedItems = []);
    } else {
      sortedItems = [...data];
      if (sortConfig.key !== null) {
        sortedItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortedItems;
    }
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // checkbox
  const [checkedAll, setCheckedAll] = useState(false);
  const handleCheckAll = (event) => {
    setCheckedAll(event.target.checked);
    const newData = setAllCheckData({
      status: event.target.checked,
      data,
      perPage,
      currentPage
    });
    setCheck(newData);
  };
  const handleCheck = (event, item) => {
    const newData = setCheckData({ status: event.target.checked, data, item });
    setCheck(newData);
  };

  return (
    <div className="sortTable">
      <div className="sortTable-wrap">
        {/* 變更顯示欄位 */}
        <div>
          <FieldShowBar
            show={isFieldShowBar}
            data={tHeader}
            setfieldShow={setfieldShow}
          />
        </div>

        <div>
          <div
            style={{
              display: "inline-block",
              width: "50%",
              textAlign: "left"
            }}
          >
            {/* 變更每頁顯示筆數 */}
            <SelectPerPage
              show={isChangePerPage}
              selected={`${perPage}`}
              setSelected={setPerPage}
            />
          </div>

          <div
            style={{
              display: "inline-block",
              width: "50%",
              textAlign: "right"
            }}
          >
            {/* 關鍵字搜尋 */}
            <KeywordSearch
              show={isKeywordSearch}
              source={referenceData}
              handleCheckAll={setCheckedAll}
              handleSearch={setSearchData}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              {/* checkbox */}
              {isCheckbox && (
                <th className="checkbox">
                  <input
                    type="checkbox"
                    checked={checkedAll}
                    onChange={(event) => {
                      handleCheckAll(event);
                    }}
                  />
                </th>
              )}
              {/* 表格抬頭 */}
              {isEmpty(tHeader) ? (
                <th></th>
              ) : (
                tHeader.map((element, idx) => {
                  return (
                    <th
                      key={idx}
                      className={`${element.show ? "" : "hide"}`}
                      onClick={() => {
                        requestSort(`${element.sorted}`);
                      }}
                    >
                      {element.name}
                      <i className="fas fa-sort" />
                    </th>
                  );
                })
              )}
            </tr>
          </thead>
          {/* 表格內容 */}
          <tbody>
            {isEmpty(sortedTableItems) ? (
              <td> no data</td>
            ) : (
              sortedTableItems
                .slice(perPage * (currentPage - 1), perPage * currentPage)
                .map((element, idx) => {
                  return (
                    <tr key={idx}>
                      {/* checkbox */}
                      {isCheckbox && (
                        <td>
                          <input
                            id={element.seq}
                            type="checkbox"
                            checked={element.checked}
                            onChange={(event) => {
                              handleCheck(event, element);
                            }}
                          />
                        </td>
                      )}
                      {/* data content */}
                      {!tHeader.isEmpty &&
                        tHeader.map((title, index) => {
                          return (
                            <td
                              key={index}
                              className={`${title.show ? "" : "hide"}`}
                            >
                              {element[title.name]}
                            </td>
                          );
                        })}
                    </tr>
                  );
                })
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        total={data.length}
        perPage={perPage}
        currentPage={currentPage}
        handleCurrentPage={setCurrentPage}
      />
    </div>
  );
};
SortTable.defaultProps = {
  isFieldShowBar: true,
  isChangePerPage: true,
  isCheckbox: true,
  isKeywordSearch: true,
  perPage: 1,
  referenceData: [],
  data: [],
  tHeader: [],
  currentPage: 1,
  checkAll: false,
  setCurrentPage: noop,
  setPerPage: noop,
  setfieldShow: noop,
  setCheck: noop,
  setSearchData: noop
};
export default memo(SortTable);
