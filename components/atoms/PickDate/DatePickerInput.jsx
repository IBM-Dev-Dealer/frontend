import Button from "../Button/Button";

const DatePickerInput = ({ placeholder, label, onClick }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div className='relative' onClick={onClick}>
    <div className='flex absolute inset-y-0 left-0 items-center pl-3'>
      <svg
        aria-hidden='true'
        class='w-5 h-5 text-gray-500 dark:text-gray-400'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
          clip-rule='evenodd'
        ></path>
      </svg>
    </div>
    <Button className='pl-10 pr-2' type='button' placeholder={placeholder} label={label} />
  </div>
);

export default DatePickerInput;
