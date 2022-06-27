import React from "react";
import classnames from "classnames";
import { numPages } from "./utils";
import "./pagination.scss";

const Pagination = ({ total, perPage, currentPage, handleCurrentPage }) => {
  const numpages = numPages(total, perPage);
  const checkedFirst = classnames({
    disabled: currentPage <= 1
  });
  const checkedPrev = classnames({
    disabled: currentPage <= 1
  });
  const checkedNext = classnames({
    disabled: currentPage >= numpages
  });
  const checkedLast = classnames({
    disabled: currentPage >= numpages
  });
  const handlePrevPage = () => {
    if (currentPage > 1) {
      handleCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < numpages) {
      handleCurrentPage(currentPage + 1);
    }
  };
  if (total === 0) {
    return "";
  } else {
    return (
      <div className="pagination">
        <div
          className={`pagination-button ${checkedFirst}`}
          onClick={() => {
            handleCurrentPage(1);
          }}
        >
          首頁
        </div>
        <div
          className={`pagination-button ${checkedPrev}`}
          onClick={handlePrevPage}
        >
          上一頁
        </div>
        {numpages &&
          numpages > 0 &&
          [...Array(numpages)].map((element, idx) => {
            return (
              <div
                className={`pagination-item ${
                  currentPage === idx + 1 ? "active" : ""
                }`}
                onClick={() => {
                  handleCurrentPage(idx + 1);
                }}
                key={idx}
              >
                {idx + 1}
              </div>
            );
          })}
        <div
          className={`pagination-button ${checkedNext}`}
          onClick={handleNextPage}
        >
          下一頁
        </div>
        <div
          className={`pagination-button ${checkedLast}`}
          onClick={() => {
            handleCurrentPage(numpages);
          }}
        >
          末頁
        </div>
      </div>
    );
  }
};
Pagination.defaultProps = {
  total: 0,
  perPage: 0,
  active: 0,
  handleCurrentPage: () => {}
};
export default Pagination;
