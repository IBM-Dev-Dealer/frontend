import { useState } from "react";

export const useTextInputState = () => {
  const [stringInputValue, setStringInputValue] = useState("");
  const [inputWasTouched, setInputWasTouched] = useState(false);

  return {
    stringInputValue,
    setStringInputValue,
    inputWasTouched,
    setInputWasTouched,
  };
};
