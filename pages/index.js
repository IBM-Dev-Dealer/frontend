import { useRouter } from "next/router";
import { useEffect } from "react";
import { ROUTES } from "../utils/utils";

const DefaultPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push(ROUTES.HOME);
  }, [push]);
  return <></>;
};

export default DefaultPage;
