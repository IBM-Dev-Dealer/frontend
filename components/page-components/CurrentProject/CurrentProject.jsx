import Carousel from '../../atoms/Carousel/Carousel';
import Title from '../../atoms/Title/Title';

const CurrentProject = () => {
  // return <div>Current Project</div>;
  return (
    <div>
      <Title>Current Project</Title>
      <Carousel
        elements={[
          { title: 'title 1', image: 'https://via.placeholder.com/400x400' },
          { title: 'title 2', image: 'https://via.placeholder.com/500x300' },
          { title: 'title 3', image: 'https://via.placeholder.com/600x400' },
        ]}
      />
    </div>
  );
};

export default CurrentProject;
