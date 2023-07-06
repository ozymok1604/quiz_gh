import { useContext } from "react";

import { QuizzesContext } from "../../context";

import { useNavigate } from "react-router-dom";

import ErrorSVG from "../../assets/error.svg";

import SuccessSVG from "../../assets/success.svg";

import { Result } from "../../Components/Result";

import { Container } from "../../Components/Container";

import styles from "./styles.module.scss";

const Finish = () => {
  const goodResult = 5;
  const { result, setResult, setIsLoading } = useContext(QuizzesContext);

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
    setIsLoading(true);
    setResult(0);
  };

  return (
    <div>
      <div className={styles.header}>Finish</div>

      <Container
        children={
          <>
            {result > goodResult ? (
              <Result text="Congratulates!!!" img={SuccessSVG} score={result} />
            ) : (
              <Result text="OOOPPPSSS!!!" img={ErrorSVG} score={result} />
            )}
            <span>
              <button
                onClick={() => handleNavigate("/")}
                className={styles.home_button}
              >
                Go to Home
              </button>
            </span>
          </>
        }
      />
    </div>
  );
};

export { Finish };
