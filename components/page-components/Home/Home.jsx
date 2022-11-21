import { useState } from 'react';
import Button from '../../atoms/Button/Button';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div>Home</div>
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
