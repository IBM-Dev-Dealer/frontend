import styles from "./Title.module.scss";

const Title = ({ children: title }) => {
  return <h3 className={styles.title}>{title}</h3>;
};

export default Title;
