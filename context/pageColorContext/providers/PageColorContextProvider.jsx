import React, { createContext, useCallback, useMemo, useState } from "react";

export const PageColorContext = createContext();

export const PageColorContextProvider = React.memo(({ children }) => {
  const [pageColorIndexes, setColorsContext] = useState({});

  const setPageColorIndexes = useCallback((newContext) => setColorsContext(newContext), []);

  const value = useMemo(
    () => ({
      setPageColorIndexes,
      pageColorIndexes,
    }),
    [pageColorIndexes, setPageColorIndexes],
  );

  return <PageColorContext.Provider value={value}>{children}</PageColorContext.Provider>;
});

PageColorContextProvider.displayName = "PageColorContextProvider";
