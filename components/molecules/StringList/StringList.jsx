import { PlusIcon } from "@heroicons/react/20/solid";
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";
import { useEffect, useState } from "react";
import ColoredItems from "../../atoms/ColoredItems/ColoredItems";

const StringList = ({ textInput, setList, list, emptyValue = "" }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (textInput.value === "" || textInput.value === emptyValue) {
      if (textInput.value === emptyValue) {
        setDisabled(true);
      } else setDisabled(false);

      if (textInput.wasTouched === true) {
        textInput.setValue(emptyValue);
      } else {
        setDisabled(true);
      }
    } else setDisabled(false);
  }, [textInput, emptyValue]);

  const handleInputContent = () => {
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
    <div>
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
            if (e.key === "Enter") handleInputContent();
          }}
          onFocus={textInput.touch}
          onBlur={() => {
            setDisabled(false);
            if (textInput.value === emptyValue) {
              textInput.setValue("");
              textInput.untouch();
            }
          }}
          clearValue={(ref) => {
            textInput.setValue("");
            textInput.untouch();
          }}
        />
        <Button
          label={<PlusIcon className='w-6 h-6' />}
          onClick={handleInputContent}
          type='button'
          isSquare={true}
          disabled={disabled}
        />
      </div>

      <div className='flex gap-4 flex-wrap my-2'>
        <ColoredItems items={list} removeItem={removeEntry} />
      </div>
    </div>
  );
};

export default StringList;
