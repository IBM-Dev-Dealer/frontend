import Dropdown from '../../atoms/Dropdown/Dropdown';
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';
import StringList from '../../atoms/StringList/StringList';

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
      <StringList textInput={{ label: 'label', id: 'addproject-stringlist', disabled: false }} />
    </div>
  );
};

export default AddProject;
