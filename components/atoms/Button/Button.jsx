import styles from './Button.module.scss';

const Button = ({ label, onClick, isLoading }) => {
  return (
    <div className={styles.button} onClick={onClick} onKeyDown={onClick} role='presentation'>
      {isLoading ? 'Loading...' : label}
    </div>
  );
};

export default Button;
