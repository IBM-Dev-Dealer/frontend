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
          const id = Math.random().toString();
          notify({
            kind: "error",
            message: id + " . This was added manually",
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
