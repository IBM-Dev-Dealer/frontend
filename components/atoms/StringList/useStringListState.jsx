import { useState } from 'react';

export const useStringListState = () => {
  const [stringList, setStringList] = useState([]);
  const [stringInputValue, setStringInputValue] = useState('');
  const [inputWasTouched, setInputWasTouched] = useState(false);

  return {
    stringList,
    setStringList,
    stringInputValue,
    setStringInputValue,
    inputWasTouched,
    setInputWasTouched,
  };
};
