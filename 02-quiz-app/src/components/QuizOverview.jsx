import { useState, useCallback, useMemo } from "react"; // Added useMemo
import QUESTIONS from "../../questions";
import Progress from "./Progress";

export default function QuizOverview() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswer] = useState([]);

  const activeAnswerIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizCompleted = activeAnswerIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function (answer) {
      setAnswerState("answered");

      setUserAnswer((prev) => [...prev, answer]);

      setTimeout(() => {
        if (answer === QUESTIONS[activeAnswerIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        // This timer starts after the first timer finishes.
        // So, it runs 2 seconds after validation
        // (which is 3 seconds after the initial click).
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeAnswerIndex]
  );

  const handleSkippedAnswer = useCallback(
    function () {
      handleSelectAnswer(null);
    },
    [handleSelectAnswer]
  );

  const shuffledAnswer = useMemo(() => {
    if (quizCompleted) {
      return [];
    }
    const answers = [...QUESTIONS[activeAnswerIndex].answers];
    answers.sort(() => Math.random() - 0.5);
    return answers;
  }, [activeAnswerIndex, quizCompleted]);

  if (quizCompleted) {
    return (
      <>
        <img src="../assets/quiz-complete.png" alt="Quiz Compeleted" />
        <h2>Quiz Compeleted</h2>
      </>
    );
  }

  return (
    <>
      <div id="question">
        {answerState === "" && (
          <Progress key={activeAnswerIndex} onTimeout={handleSkippedAnswer} />
        )}

        <h2>{QUESTIONS[activeAnswerIndex].text}</h2>

        <ul id="answers">
          {shuffledAnswer.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = "";

            if (answerState === "answered" && isSelected) {
              cssClass = "selected";
            }

            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClass = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                  // Disable button during feedback to prevent double clicking
                  disabled={answerState !== ""}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
