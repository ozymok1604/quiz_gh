import { getRandomColor } from "../../utils/getRandomColor";

import styles from "./styles.module.scss";

const Answer = ({ style, onClick, answer }) => {
  return (
    <div
      style={style ? style : { backgroundColor: getRandomColor() }}
      className={styles.answerCard}
      onClick={onClick}
    >
      {answer}
    </div>
  );
};

export { Answer };
