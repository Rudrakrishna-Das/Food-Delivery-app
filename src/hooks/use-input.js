import { useState, useEffect } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [shakeIsPresent, setShakeIsPresent] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const valueBlurHandler = () => {
    setIsTouched(true);
    !valueIsValid && setShakeIsPresent(true);
  };
  useEffect(() => {
    if (valueIsValid) return;
    const shakeTimer = setTimeout(() => {
      setShakeIsPresent(false);
    }, 300);
    return () => {
      clearTimeout(shakeTimer);
    };
  }, [shakeIsPresent]);

  return {
    value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    shakeIsPresent,
  };
};

export default useInput;
