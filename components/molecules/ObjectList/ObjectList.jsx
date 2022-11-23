import { PlusIcon } from '@heroicons/react/20/solid';
import Button from '../../atoms/Button/Button';
import ColoredItems from '../../atoms/ColoredItems/ColoredItems';
import Dropdown from '../../atoms/Dropdown/Dropdown';

const ObjectList = ({ setList, list, dataFieldsNames, dataFields }) => {
  console.log(dataFields);
  return (
    <>
      <div className='flex gap-2 items-end'>
        {/* <TextInput
          disabled={textInput.disabled}
          id={textInput.id}
          labelText={textInput.label}
          name={textInput.name}
          placeholder='placeholder'
          type='text'
          value={textInput.value}
          onChange={(e) => {
            textInput.setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleInputContent();
          }}
          onFocus={textInput.touch}
        /> */}
        {dataFieldsNames.map((field) => (
          <Dropdown list={dataFields[field]} key={field} />
        ))}
        <Button
          label={<PlusIcon className='w-6 h-6' />}
          //   onClick={handleInputContent}
          onClick={() => {}}
          type='button'
          isSquare={true}
        />
      </div>

      <div className='flex gap-4 flex-wrap my-2'>
        {/* <ColoredItems items={list} removeItem={removeEntry} /> */}
        <ColoredItems items={list} removeItem={() => {}} />
      </div>
    </>
  );
};

export default ObjectList;
