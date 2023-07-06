import { useContext, useState } from "react";

import { QuizzesContext } from "../../context";

import { useNavigate } from "react-router-dom";

import { getRandomArray } from "../../utils/getRandomArray";

import { Container } from "../../Components/Container";

import { Answer } from "../../Components/Answer";

import styles from "./styles.module.scss";

const Play = () => {
  const navigate = useNavigate();
  const { quizziz, setResult, setIsLoading, result, quizName } =
    useContext(QuizzesContext);
  const [questionNumber, setQuestionNumber] = useState(0);
  const handleNavigate = (route) => {
    navigate(route);
    setIsLoading(true);
  };
  const onFinishQuestion = () => {
    handleNavigate("/finish");
  };

  const onAnswer = (answer) => {
    setQuestionNumber(questionNumber + 1);
    answer == quizziz[questionNumber]?.correct_answer
      ? setResult(result + 1)
      : setResult(result);
    questionNumber == 9 ? onFinishQuestion() : console.log("play");
  };

  const isBoolean = quizziz[questionNumber].type === "boolean" ? true : false;

  const answers = isBoolean
    ? [true, false]
    : [
        ...quizziz[questionNumber]?.incorrect_answers,
        quizziz[questionNumber]?.correct_answer,
      ];

  getRandomArray(answers);

  return (
    <div>
      <div className={styles.text}>You selected: {quizName}</div>
      <div className={styles.header}>Question {questionNumber + 1}</div>

      <Container
        children={
          <>
            <div className={styles.question}>
              {quizziz[questionNumber].question}
            </div>

            {!isBoolean ? (
              <div className={styles.answers}>
                {answers?.map((item) => (
                  <Answer answer={item} onClick={() => onAnswer(item)} />
                ))}
              </div>
            ) : (
              <div className={styles.answers}>
                <Answer
                  style={{ backgroundColor: "red" }}
                  answer={"False"}
                  onClick={() => onAnswer("False")}
                />

                <Answer
                  style={{ backgroundColor: "green" }}
                  answer={"True"}
                  onClick={() => onAnswer("True")}
                />
              </div>
            )}
            <button
              onClick={() => handleNavigate("/quiz_gh")}
              className={styles.cancel_button}
            >
              Cancel a Quiz
            </button>
          </>
        }
      />
    </div>
  );
};

export { Play };
