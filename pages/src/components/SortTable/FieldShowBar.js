import React, { memo } from "react";
import { noop } from "lodash";

const FieldShowBar = ({ show, data, setfieldShow }) => {
  if (show && data) {
    return (
      <div className="fieldShowBar">
        <div className="wrap">
          {data.map((element, idx) => {
            return (
              <div
                key={idx}
                className={`item ${element.show ? "active" : ""}`}
                onClick={() => {
                  setfieldShow(element.name);
                }}
              >
                {element.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return "";
  }
};
FieldShowBar.defaultProps = {
  show: false,
  data: [],
  setfieldShow: noop
};
export default memo(FieldShowBar);
