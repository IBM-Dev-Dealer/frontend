import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '../../../utils/utils';
import styles from './Button.module.scss';

const Button = ({ label, onClick, isLoading }) => {
  return (
    <Transition
      show={true}
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <button
        className={classNames(
          styles.button,
          'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 active:outline-none active:ring-2 active:ring-indigo-500 active:ring-offset-2 active:ring-offset-gray-100 my-2',
        )}
        onClick={onClick}
        onKeyDown={onClick}
        role='presentation'
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : label}
      </button>
    </Transition>
  );
};

export default Button;
