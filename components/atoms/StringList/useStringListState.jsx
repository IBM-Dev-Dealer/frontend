import { useState } from 'react';

export const useStringListState = () => {
  const [stringList, setStringList] = useState([]);
  const [stringInputValue, setStringInputValue] = useState('');

  return { stringList, setStringList, stringInputValue, setStringInputValue };
};
