import { XMarkIcon } from "@heroicons/react/20/solid";
import { colorizeJSXArray } from "../../../utils/utils";

const ColoredItems = ({ items, removeItem }) => {
  const mappedItems = items.map((entry, i) => {
    return (
      <div
        className='bg-light-mustard max-w-full py-2 px-4 rounded-xl flex justify-between gap-2 shadow-sm w-fit'
        key={`${entry}-${i}`}
      >
        <div className='break-words text-sm flex items-center'>{entry}</div>
        <div className='flex items-center'>
          <XMarkIcon
            className='cursor-pointer w-6 h-6 hover:scale-125 active:opacity-20 active:scale-50'
            onClick={() => removeItem(entry, i)}
          />
        </div>
      </div>
    );
  });
  return colorizeJSXArray(mappedItems);
};

export default ColoredItems;
