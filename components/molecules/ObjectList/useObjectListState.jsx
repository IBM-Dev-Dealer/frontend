import { useState } from 'react';

export const useObjectListState = () => {
  const [objectList, setObjectList] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const [inputWasTouched, setInputWasTouched] = useState(false);

  return {
    objectList,
    setObjectList,
    selectedValue,
    setSelectedValue,
    inputWasTouched,
    setInputWasTouched,
  };
};
