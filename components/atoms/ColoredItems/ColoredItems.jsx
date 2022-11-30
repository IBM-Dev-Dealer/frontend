import { XMarkIcon } from "@heroicons/react/20/solid";
import { colorizeJSXArray } from "../../../utils/utils";

const ColoredItems = ({ items, removeItem, entryJoinedBy }) => {
  const mappedItems = items.map((entry, i) => {
    const splittedEntry = entry.split(entryJoinedBy);
    return (
      <div
        className='bg-light-mustard max-w-full py-2 px-4 rounded-xl flex justify-between gap-2 shadow-sm w-fit'
        key={`${entry}-${i}`}
      >
        <div className='flex'>
          {splittedEntry.map((x, ix) => (
            <div key={x} className='flex items-center'>
              <span className='break-words text-sm'>{x}</span>
              {ix !== splittedEntry.length - 1 && (
                <div className='mx-2 border-4 rounded-xl h-2 border-white' />
              )}
            </div>
          ))}
        </div>
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
