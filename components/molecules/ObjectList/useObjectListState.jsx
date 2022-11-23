import { useState } from 'react';

export const useObjectListState = (dataFieldsString) => {
  const [objectList, setObjectList] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const initialValue = {};
  dataFieldsString.forEach((field) => {
    initialValue[field] = [];
  });

  const [dataFields, setDataFields] = useState(initialValue);

  return {
    objectList,
    setObjectList,
    selectedValue,
    setSelectedValue,
    inputWasTouched,
    setInputWasTouched,
    dataFields,
    setDataFields,
  };
};
