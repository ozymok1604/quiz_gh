import { useContext } from "react";

import { QuizzesContext } from "../../context";

import { useQuizzesFetch } from "../../effects/useQuizzesFetch";

import { Link } from "react-router-dom";

import { getRandomColor } from "../../utils/getRandomColor";

import styles from "./styles.module.scss";

const Card = ({ category }) => {
  const questions = useQuizzesFetch(category);
  const { setQuizziz, isLoading, setQuizName } = useContext(QuizzesContext);
  const onHandleClick = (quizziz) => {
    setQuizziz(quizziz);
    setQuizName(quizziz[0].category);
  };
  return (
    <div
      style={{ backgroundColor: isLoading ? "gray" : getRandomColor() }}
      className={styles.card}
    >
      <div className={styles.name}>{questions?.[0]?.category}</div>
      <div>Questions: 10</div>
      <Link to={"/quiz_gh/play"}>
        <button
          disabled={isLoading}
          onClick={() => onHandleClick(questions)}
          className={styles.button}
        >
          Play
        </button>
      </Link>
    </div>
  );
};

export { Card };
