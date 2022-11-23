import { PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Button from '../../atoms/Button/Button';
import { colorizeJSXArray } from '../../../utils/utils';
import TextInput from '../../atoms/TextInput/TextInput';
import { useEffect } from 'react';

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

  const entriesMap = colorizeJSXArray(
    list.map((entry, i) => (
      <div
        className='bg-light-mustard max-w-full py-2 px-4 rounded-xl flex justify-between gap-2 shadow-sm w-fit'
        key={`${entry}-${i}`}
      >
        <div className='break-words text-sm flex items-center'>{entry}</div>
        <div className='flex items-center'>
          <XMarkIcon
            className='cursor-pointer w-6 h-6 hover:scale-125 active:opacity-20 active:scale-50'
            onClick={() => removeEntry(entry)}
          />
        </div>
      </div>
    )),
  );

  return (
    <>
      <div className='flex gap-2 items-end'>
        {/* <input
          className='w-full border-solid border-2 border-gray my-2 px-2'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleInputContent();
          }}
        /> */}
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

      <div className='flex gap-4 flex-wrap my-2'>{entriesMap}</div>
    </>
  );
};

export default StringList;
