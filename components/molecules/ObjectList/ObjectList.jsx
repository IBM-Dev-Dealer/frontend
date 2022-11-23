import { PlusIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import Button from '../../atoms/Button/Button';
import ColoredItems from '../../atoms/ColoredItems/ColoredItems';
import Dropdown from '../../atoms/Dropdown/Dropdown';

const ObjectList = ({ setList, list, dataFieldsNames, dataFields }) => {
  const [selection, setSelection] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (Object.keys(selection).length === dataFieldsNames.length) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [dataFieldsNames.length, selection]);

  const handleSubmit = () => {
    setList((prev) => {
      const newArr = [...prev];
      newArr.push(selection);
      return newArr;
    });
  };

  const removeEntry = (entry) => {
    setList((prev) => {
      console.log('list prev', prev);
      console.log('list entry', entry);
      //   const newArr = [...prev];
      //   const index = prev.indexOf(entry);
      //   newArr.splice(index, 1);
      return prev;
    });
  };

  return (
    <>
      <div className='flex gap-2 items-end'>
        {dataFieldsNames.map((field) => (
          <Dropdown
            list={dataFields[field.codename]}
            key={field.codename}
            placeholder={field.label}
            select={(item) => {
              setSelection((prev) => ({ ...prev, [field.codename]: item }));
            }}
            selected={selection[field.codename]}
          />
        ))}

        <Button
          label={<PlusIcon className='w-6 h-6' />}
          onClick={handleSubmit}
          type='button'
          isSquare={true}
          disabled={!isValid}
        />
      </div>

      <div className='flex gap-4 flex-wrap my-2'>
        <ColoredItems
          items={list.map((item) =>
            Object.keys(item)
              .map((key) => item[key].label)
              .join('  /  '),
          )}
          removeItem={removeEntry}
        />
      </div>
    </>
  );
};

export default ObjectList;
