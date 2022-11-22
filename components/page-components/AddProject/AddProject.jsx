import Dropdown from '../../atoms/Dropdown/Dropdown';
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';

const AddProject = () => {
  return (
    <div>
      <Title>Add Project</Title>
      <Dropdown />
      <Button label={'prezz me'} />
    </div>
  );
};

export default AddProject;
