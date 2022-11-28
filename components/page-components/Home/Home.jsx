import { useState } from "react";
import { useNotifications } from "../../../context/pageColorContext/hooks/useNotifications";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { notify } = useNotifications();

  return (
    <>
      <Title>Home</Title>
      <Button
        isLoading={isLoading}
        label='Label'
        onClick={() => {
          notify({
            kind: "error",
            message: "erfgherth gwrts betzr h bdsrt ndrt hb set ns rtn sr g sd r",
          });
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }}
      />
    </>
  );
};

export default Home;
