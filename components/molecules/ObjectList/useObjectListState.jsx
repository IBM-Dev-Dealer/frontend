import { useState } from "react";

export const useObjectListState = () => {
  const [objectList, setObjectList] = useState([]);
  const [inputWasTouched, setInputWasTouched] = useState(false);

  return {
    objectList,
    setObjectList,
    inputWasTouched,
    setInputWasTouched,
  };
};
