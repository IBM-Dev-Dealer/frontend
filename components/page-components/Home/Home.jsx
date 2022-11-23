import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Loader from '../../atoms/Loader/Loader';
import Title from '../../atoms/Title/Title';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Title>Home</Title>
      <Loader loading={isLoading} />
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
