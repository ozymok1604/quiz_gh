import styles from "./styles.module.scss";
const Container = ({ children }) => {
  return <div className={styles.flex_container}>{children}</div>;
};

export { Container };
