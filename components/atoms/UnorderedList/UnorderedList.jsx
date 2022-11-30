const UnorderedList = ({ label, list, onClick, changeEnabler = {} }) => {
  return (
    <div className='my-2'>
      <div className='text-sm'>{label}</div>
      <ul className='p-4 bg-transparent-gray-05 rounded-2xl my-2 shadow-sm'>
        {list.map((item, i) => (
          <li key={i} className='text-sm flex items-center'>
            {Object.keys(item).map((itemKey, ix) => (
              <>
                <div
                  key={itemKey}
                  className='flex-1 text-center bg-white my-1 p-2 shadow-md rounded-md'
                >{`${item[itemKey].label}`}</div>
                {ix !== Object.keys(item).length - 1 && (
                  <div className='mx-4 border-4 rounded-lg border-mustard' />
                )}
              </>
            ))}
          </li>
        ))}
      </ul>
      {changeEnabler.enablesChange && (
        <div className='flex justify-end'>
          <span
            className='text-xs inline-flex cursor-pointer active:opacity-25 select-none border-b hover:border-black border-transparent'
            onClick={onClick}
            role='presentation'
          >
            {changeEnabler.label && (
              <span className='text-xs inline-flex cursor-pointer active:opacity-25 select-none'>
                {changeEnabler.label}
              </span>
            )}
            {Object.hasOwnProperty.call(changeEnabler, "isChangeComponentVisible") && (
              <span className=' text-xs inline-flex cursor-pointer active:opacity-25 select-none text-gray ml-1'>
                {"  "}
                Click to {changeEnabler.isChangeComponentVisible ? "hide" : "show"}
              </span>
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default UnorderedList;
