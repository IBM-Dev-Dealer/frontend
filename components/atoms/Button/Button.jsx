import { classNames } from '../../../utils/utils';
import styles from './Button.module.scss';

const Button = ({ label, onClick, isLoading, className }) => {
  return (
    <button
      className={classNames(
        styles.button,
        'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 active:outline-none active:ring-2 active:ring-indigo-500 active:ring-offset-2 active:ring-offset-gray-100 my-2',
        className,
      )}
      onClick={onClick}
      onKeyDown={onClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
