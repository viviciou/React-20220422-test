import React, { useState } from "react";
import SortTable from "../../components/SortTable";
import { exampleData, tHeaderData } from "../../utils/exampleData";
import { getCheckboxData } from "../../components/SortTable/utils";
import { setNewHeader } from "../../components/SortTable/utils";

import Breadcrumb from "../../components/Breadcrumb";

const TablePage = () => {
  const [perPage, setPerPage] = useState("3");
  const data = exampleData(); //原始資料
  const referenceData = getCheckboxData(data); //加上checkboxlist
  const [result, setResult] = useState(referenceData); //畫面顯示內容
  const [tHeader, setTHeader] = useState(tHeaderData());
  const [currentPage, setCurrentPage] = useState(1);
  // 變更顯示表格欄位
  const setfieldShow = (item) => {
    const newList = setNewHeader(tHeader, item);
    setTHeader(newList);
  };
  return (
    <div className="wrap">
      <Breadcrumb />

      <SortTable
        currentPage={currentPage}
        perPage={perPage}
        referenceData={referenceData}
        data={result}
        tHeader={tHeader}
        setCurrentPage={setCurrentPage}
        setPerPage={setPerPage}
        setfieldShow={setfieldShow}
        setSearchData={(data) => {
          setResult(data);
        }}
        setCheck={(data) => {
          setResult(data);
        }}
      />
    </div>
  );
};
export default TablePage;
