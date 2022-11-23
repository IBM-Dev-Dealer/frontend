import { useState } from 'react';

export const useObjectListState = (dataFieldsString) => {
  const [objectList, setObjectList] = useState([]);
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const initialValue = {};
  dataFieldsString.forEach((field) => {
    initialValue[field] = [];
  });

  return {
    objectList,
    setObjectList,
    inputWasTouched,
    setInputWasTouched,
  };
};
