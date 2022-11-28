import { createContext, useState } from "react";

export const PageColorContext = createContext();

export const PageColorContextProvider = ({ children }) => {
  const [pageColorIndexes, setColorsContext] = useState({});

  const setPageColorIndexes = (newContext) => setColorsContext(newContext);

  const value = {
    setPageColorIndexes,
    pageColorIndexes,
  };

  return <PageColorContext.Provider value={value}>{children}</PageColorContext.Provider>;
};
