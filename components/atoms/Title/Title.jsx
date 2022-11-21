import styles from './Title.module.scss';

const Title = ({ children: title }) => {
  return <div className={styles.title}>{title}</div>;
};

export default Title;
