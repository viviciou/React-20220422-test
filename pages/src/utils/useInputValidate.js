import { useState } from "react";

const useInputValidate = (validateValue) => {
  const [input, setInput] = useState("");
  const valueIsValid = validateValue(input);
  const isError = !valueIsValid && input.isTouched;

  const handleChangeValue = (e) => {
    // dispatch({ type: "INPUT", value: e.target.value });
  };
  const handleBlurValue = () => {
    // dispatch({ type: "BLUR" });
  };
  const reset = () => {
    // dispatch({ type: "RESET" });
  };

  return {
    value: input,
    isValid: valueIsValid,
    isError,
    handleChangeValue,
    handleBlurValue,
    reset
  };
};

export default useInputValidate;
