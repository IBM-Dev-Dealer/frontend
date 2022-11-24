import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({ label, onClick, isLoading, disabled, className, type, isSquare }) => {
  return (
    <button
      type={type}
      className={classNames(
        styles.button,
        "inline-flex justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 active:outline-none active:ring-2 active:ring-indigo-500 active:ring-offset-2 active:ring-offset-gray-100 my-2 items-center h-10 flex-grow-0 flex-shrink-0",
        className,
        isSquare === true ? "w-10" : "w-full",
      )}
      onClick={onClick}
      onKeyDown={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
