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
        label='Trigger error notification'
        onClick={() => {
          const id = Math.floor(Math.random() * 10000).toString();
          notify({
            kind: "error",
            message: `ID: ${id}. Error triggered manually.`,
            id,
          });
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 250);
        }}
      />
    </>
  );
};

export default Home;
