import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";

import { QuizzesContext } from "./context";

import { Play } from "./Pages/Play";

import { Finish } from "./Pages/Finish";

import "./App.css";

function App() {
  const [quizziz, setQuizziz] = useState({});
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [quizName, setQuizName] = useState("");
  return (
    <QuizzesContext.Provider
      value={{
        setQuizziz,
        quizziz,
        result,
        setResult,
        isLoading,
        setIsLoading,
        quizName,
        setQuizName,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </BrowserRouter>
    </QuizzesContext.Provider>
  );
}

export default App;
