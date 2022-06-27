import { noop } from "lodash";
import React from "react";

const CusInput = ({
  name,
  type,
  value,
  placeholder,
  disabled,
  readOnly,
  handleChange,
  handleBlur
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={handleChange}
      onBlur={handleBlur}
      autoComplete="off"
    />
  );
};
CusInput.defaultProps = {
  name: "",
  type: "text",
  value: "",
  placeholder: "",
  disabled: false,
  readOnly: false,
  handleChange: noop,
  handleBlur: noop
};
export default CusInput;
