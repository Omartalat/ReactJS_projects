import { useState } from "react";
import questions from "../../questions";

export default function QuizOverview() {
  const [question, setQuestion] = useState()
  return (
    <>
      <h2>Question</h2>
      <span id="answers">
        <span className="answer">
          <button>Answer</button>
        </span>
        <span className="answer">
          <button>Answer</button>
        </span>
        <span className="answer">
          <button>Answer</button>
        </span>
        <span className="answer">
          <button>Answer</button>
        </span>
      </span>
    </>
  );
}
