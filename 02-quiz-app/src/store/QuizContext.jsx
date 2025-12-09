import { createContext } from "react";

export const QuizContext = createContext({
  skipped: 0,
  correct: 0,
  incorrect: 0,
});


