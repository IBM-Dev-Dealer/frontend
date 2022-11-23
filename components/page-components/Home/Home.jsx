import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Title>Home</Title>
      <Button
        isLoading={isLoading}
        label='Label'
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }}
      />
    </>
  );
};

export default Home;
