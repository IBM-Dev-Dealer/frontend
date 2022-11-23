import { PlusIcon } from '@heroicons/react/20/solid';
import Button from '../../atoms/Button/Button';
import TextInput from '../../atoms/TextInput/TextInput';
import { useEffect } from 'react';
import ColoredItems from '../../atoms/ColoredItems/ColoredItems';

const StringList = ({ textInput, setList, list, emptyValue = '' }) => {
  useEffect(() => {
    if (textInput.value === '' && textInput.wasTouched === true) textInput.setValue(emptyValue);
  }, [textInput, emptyValue]);

  const handleInputContent = () => {
    if (textInput.value === emptyValue) return;
    setList((prev) => {
      const newArr = [...prev];
      newArr.push(textInput.value);
      return newArr;
    });
    textInput.setValue(emptyValue);
  };

  const removeEntry = (entry) => {
    setList((prev) => {
      const newArr = [...prev];
      const index = prev.indexOf(entry);
      newArr.splice(index, 1);
      return newArr;
    });
  };

  return (
    <>
      <div className='flex gap-2 items-end'>
        <TextInput
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
        />
        <Button
          label={<PlusIcon className='w-6 h-6' />}
          onClick={handleInputContent}
          type='button'
          isSquare={true}
        />
      </div>

      <div className='flex gap-4 flex-wrap my-2'>
        <ColoredItems items={list} removeItem={removeEntry} />
      </div>
    </>
  );
};

export default StringList;
