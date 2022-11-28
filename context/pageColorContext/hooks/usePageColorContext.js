import { useContext } from "react";
import { PageColorContext } from "../PageColorContextProvider";

export const usePageColorContext = () => {
  const context = useContext(PageColorContext);
  return context;
};
