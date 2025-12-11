import { useState } from "react";
import QUESTIONS from "../../questions";

export default function QuizOverview() {
  const [userAnswers, setUserAnswer] = useState([]);

  let activeAnswerIndex = userAnswers.length;

  const quizCompleted = activeAnswerIndex === QUESTIONS.length;

  function handleSelectAnswer(answer) {
    setUserAnswer((prev) => [...prev, answer]);
  }

  if (quizCompleted) {
    return <h2>completed</h2>;
  }

  const shuffledAnswer = [...QUESTIONS[activeAnswerIndex].answers];
  shuffledAnswer.sort(() => Math.random() - 0.5);

  return (
    <>
      <h2>{QUESTIONS[activeAnswerIndex].text}</h2>
      <ul id="answers">
        {shuffledAnswer.map((answer) => {
          return (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
