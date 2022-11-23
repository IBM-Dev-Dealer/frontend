import Dropdown from '../../atoms/Dropdown/Dropdown';
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';

const AddProject = () => {
  return (
    <div>
      <Title>Add Project</Title>
      <Dropdown
        list={[
          { label: 'item1', value: '#item1' },
          { label: 'item2', value: '#item2' },
          { label: 'item3', value: '#item3' },
        ]}
      />
      <Button label={'prezz me'} />
    </div>
  );
};

export default AddProject;
