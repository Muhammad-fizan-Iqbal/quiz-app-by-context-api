import React, { useContext } from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/Contexts";
function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      {score === 3 ? (
        <h1>Finished Quiz Amazingly Weldon!</h1>
      ) : score === 2 ? (
        <h1>Good Quiz Try One More Time!</h1>
      ) : score <= 1 ? (
        <h1>Nice Try But Please Try Again!</h1>
      ) : (
        ""
      )}

      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
