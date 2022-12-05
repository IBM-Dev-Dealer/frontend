import { useRouter } from "next/router";
import { useEffect } from "react";
import { ROUTES } from "../utils/utils";

const DefaultPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push(ROUTES.CURRENT_PROJECTS);
  }, [push]);
  return <></>;
};

export default DefaultPage;
