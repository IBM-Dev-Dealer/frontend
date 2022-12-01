import { useContext } from "react";
import { PageColorContext } from "../providers/PageColorContextProvider";

export const usePageColorContext = () => {
  const context = useContext(PageColorContext);
  return context;
};
