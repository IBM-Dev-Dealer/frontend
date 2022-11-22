import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Button from '../Button/Button';
import { colorizeJSXArray } from '../../../utils/utils';

const StringList = () => {
  const [entries, setEntries] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputContent = () => {
    if (inputValue === '') return;
    setEntries((prev) => {
      const newArr = [...prev];
      newArr.push(inputValue);
      return newArr;
    });
    setInputValue('');
  };

  const removeEntry = (entry) => {
    setEntries((prev) => {
      const newArr = [...prev];
      const index = prev.indexOf(entry);
      newArr.splice(index, 1);
      return newArr;
    });
  };

  const entriesMap = colorizeJSXArray(
    entries.map((entry, i) => (
      <div
        className='bg-light-mustard max-w-full py-2 px-4 rounded-xl flex justify-between gap-2 shadow-sm w-fit'
        key={`${entry}-${i}`}
      >
        <div className='break-words overflow-clip'>{entry}</div>
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
      <div className='w-100 flex gap-2'>
        <input
          className='w-full border-solid border-2 border-gray my-2 px-2'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleInputContent();
          }}
        />
        <Button
          label={<PlusIcon className='w-6 h-6' />}
          className='w-fit px-2 py-2'
          onClick={handleInputContent}
        />
      </div>

      <div className='flex gap-4 flex-wrap my-2'>{entriesMap}</div>
    </>
  );
};

export default StringList;
