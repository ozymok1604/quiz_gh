import { useContext, useEffect, useState } from "react";

import axios from "axios";

import { QuizzesContext } from "../context";

import { BASE_URL } from "../constants";

const useQuizzesFetch = (category) => {
  const { setIsLoading } = useContext(QuizzesContext);
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      setIsLoading(true);
      const response = await axios(`${BASE_URL}amount=10&category=${category}`);
      setQuestions(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return questions;
};

export { useQuizzesFetch };
