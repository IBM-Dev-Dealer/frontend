import { PlusIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import ColoredItems from "../../atoms/ColoredItems/ColoredItems";

const ObjectList = ({ setList, list, dataFields, label, onChange }) => {
  const [selection, setSelection] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (Object.keys(selection).length === dataFields.length) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [dataFields.length, selection]);

  useEffect(() => {
    setSelection({});
  }, [list]);

  const handleSubmit = () => {
    setList((prev) => {
      const newArr = [...prev];
      newArr.push(selection);
      onChange && onChange(newArr);
      return newArr;
    });
  };

  const removeEntry = (entry, index) => {
    setList((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1);
      onChange && onChange(newArr);
      return newArr;
    });
  };

  return (
    <div>
      <div className='text-sm'>{label}</div>
      <div className='flex gap-2 items-end'>
        {dataFields &&
          dataFields.map((dataField) => (
            <Dropdown
              list={dataField.fields}
              key={dataField.codename}
              placeholder={dataField.label}
              select={(item) => {
                setSelection((prev) => ({ ...prev, [dataField.codename]: item }));
              }}
              selected={selection[dataField.codename]}
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

      <div className='flex gap-2 flex-wrap my-2'>
        <ColoredItems
          items={list.map((item) =>
            Object.keys(item)
              .map((key) => item[key].label)
              .join(" / "),
          )}
          removeItem={removeEntry}
        />
      </div>
    </div>
  );
};

export default ObjectList;
