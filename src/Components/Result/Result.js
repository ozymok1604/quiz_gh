import styles from "./styles.module.scss";
const Result = ({ text, img, score }) => {
  return (
    <>
      <div className={styles.text}>{text}</div>
      <img className={styles.result_img} src={img} />
      <div className={styles.text}>You scored {score} points</div>
    </>
  );
};

export { Result };
